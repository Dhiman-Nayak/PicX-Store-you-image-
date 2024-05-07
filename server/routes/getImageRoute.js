import express from "express"
import getImageController from "../controllers/getImageController.js"
import uploadUserImage from "../middlewares/multer.js"
const router = express.Router();
const app=express();
import authenticateToken from "../middlewares/authenticateToken.js"
router.post("/getImage",authenticateToken,getImageController)

export default router;