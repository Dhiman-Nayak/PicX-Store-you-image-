import express from "express"
import {uploadImageController} from "../controllers/uploadImageController.js"
import uploadUserImage from "../middlewares/multer.js"
const router = express.Router();
const app=express();

router.post("/uploadImage",uploadUserImage,uploadImageController)

export default router;