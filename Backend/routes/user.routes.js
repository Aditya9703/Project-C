import { Router} from "express";
import { loginUser, logoutUser, registerUser, updateAccessToken } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/authMiddleware.js";

const router = Router();

router.route('/register').post(
    registerUser
)

router.route('/login').post(
    loginUser
)

router.route('/logout').post(
    verifyJWT,
    logoutUser
)

router.route('/refresh-token').post(
    verifyJWT,
    updateAccessToken
)

export default router