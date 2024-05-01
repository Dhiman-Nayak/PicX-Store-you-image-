import express from "express"
import {uploadImageController} from "../controllers/uploadImageController.js"

const router = express.Router();
const app=express();

router.post("/uploadImage",uploadImageController)

export default router;