import { asyncHandler } from '../utils/asyncHandler.js';
import { User } from '../models/User.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import jwt from 'jsonwebtoken'

const generateAccessAndRefreshToken = async (userId) => {
    
    try {
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave : false});

        return {accessToken,refreshToken};

    } catch (error) {
        throw new ApiError(500,"Something went wrong while generateAccessAndRefreshToken");
    }
}

const registerUser = asyncHandler(async (req,res) => {

    const {name,email,whatsappNumber,password,ref} = req.body;
    const refId = ref;
    console.log(refId);

    if([name,email,password].some((feild) => {
        return (feild?.trim() === "")
    }))
    {
        throw new ApiError(400,"All feilds are required")
    }

    const existingUser = await User.findOne({
        email
    })

    if(existingUser)
    {
        throw new ApiError(400,"User already exists with same email")      
    }

    const user = await User.create({
        name,
        email,
        password,
        whatsappNumber
    });

    const createdUser = await User.findById(user._id).
    select("-password -refreshToken");

    if(!createdUser)
    {
        throw new ApiError(500,"Something went wrong while registering the user")
    }

    // user created so increment the invited cnt at refId
    if(refId)
    {
        try{
        const referredByUser = await User.findById(refId);

        user.referredBy = referredByUser.name;
        await user.save();

        const updatedUser = await User.findByIdAndUpdate(
        refId,
        { $set: { totalInvites: (referredByUser.totalInvites || 0) + 1 } },
        { new: true }
        );
        }catch(err)
        {
            throw new ApiError(500,"Some error occured while updating inviteCounts")
        }
    }

    
    const referralLink = `http://localhost:5173/?ref=${user._id}`;

    if(!referralLink)
    {
        throw new ApiError(500,"Some error occured while creating referral link")       
    }

    const newUser = await User.findById(user._id).
    select("-password -refreshToken");

    return res.status(201).json(new ApiResponse(201,{ user: newUser, referralLink }, "User registered successfully"));
})

const loginUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password)
    {
        throw new ApiError(401,"Email and password both are required");
    }

    const user = await User.findOne({
        email
    });

    if(!user)
    {
        throw new ApiError(401,"User does not exist with this email");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid)
    {
        throw new ApiError(401,"Password incorrect");
    }

    //login everything is fine:

    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly : true,
        secure : true
    }

    return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(200,{user : loggedInUser,accessToken,refreshToken},"User logged in successfully")
    );
})

const logoutUser = asyncHandler(async (req,res) => {

     await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken : undefined
            }
        },
        {
           new : true
        });

    const options = {
        httpOnly : true,
        secure : true
    }

    return res.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200,{},"User logged out")
    )
})

const updateAccessToken = asyncHandler(async (req,res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if(!incomingRefreshToken)
    {
        throw new ApiError(401,"Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id);
    
        if(!user)
        {
            throw new ApiError(401,"Invalid refresh token");
        }
    
        if(incomingRefreshToken !== user?.refreshToken)
        {
            throw new ApiError(401,"Refresh token is expired or used");
        }
    
        const options = {
            httpOnly : true,
            secure : true
        }
    
        const {accessToken,newRefreshToken} = await generateAccessAndRefreshToken(user._id);
    
        return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",newRefreshToken,options)
        .json(
            new ApiResponse(200,{accessToken , refreshToken : "newRefreshToken"},"Access Token Refreshed")
        )

    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Refresh token")
    }
})

export {
    generateAccessAndRefreshToken,
    registerUser,
    loginUser,
    logoutUser,
    updateAccessToken,
}