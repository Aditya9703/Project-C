import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/User.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const dashboardRanking = asyncHandler(async (_,res) => {

    //find top 10 :
    const topUsers = await User.find({})
    .sort({ totalInvites: -1 })  // -1 for descending
    .limit(10);  

    if(!topUsers)
    {
        throw new ApiError(500,"No users currently");
    }

    res.status(200).json(
        new ApiResponse(200,{topUsers},"Top users found")
    )
})

export default dashboardRanking;