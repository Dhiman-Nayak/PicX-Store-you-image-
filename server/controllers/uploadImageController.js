import ethers from "ethers"
// import  UserSchema from "../models/User.js"
import { config } from "../config/serverConfig.js";
import pinataSDK from '@pinata/sdk';


const uploadImageController= async (req,res)=>{
    try {
        
        const pinata = new pinataSDK({ pinataApiKey: config.PINATA_API_KEY, pinataSecretApiKey: config.PINATA_SECRET_KEY });
        const res = await pinata.testAuthentication()
        console.log(res)
    // "message": "Congratulations! You are communicating with the Pinata API"!"


    } catch (error) {
        console.log(error);
        res.status(500).json({massage:"Internal Server Error"})
    }
}


export {uploadImageController}