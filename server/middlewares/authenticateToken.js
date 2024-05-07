import jwt from "jsonwebtoken"
import { config } from "../config/serverConfig.js"
function authenticateToken(req,res,next) {
    try {
        const token=req.headers["x-access-token"]
        if(!token){
            throw new Error("No Token found")
        }

        const decoded=jwt.verify(token,config.JWT_SECRET_KEY)
        req.address=decoded.address;
        next()
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}
export default authenticateToken;