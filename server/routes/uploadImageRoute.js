import express from "express"
import {uploadImageController} from "../controllers/uploadImageController.js"
import uploadUserImage from "../middlewares/multer.js"
const router = express.Router();
const app=express();
import authenticateToken from "../middlewares/authenticateToken.js"
router.post("/uploadImage",authenticateToken,uploadUserImage,uploadImageController)

export default router;