import express from 'express';
import { getTopUsers } from '../controllers/rankingController.js';
const router = express.Router();
router.get('/top', getTopUsers);

export default router;