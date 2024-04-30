import express from "express"
import {authController} from "../controllers/authController.js"

const router = express.Router();
const app=express();

router.post("/authenticate",authController)

export default router;