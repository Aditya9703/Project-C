import { Router} from "express";
import dashboardRanking from "../controllers/ranking.controller.js";

const routerDashboard = Router();

routerDashboard.route('/').post(
    dashboardRanking
)

export default routerDashboard