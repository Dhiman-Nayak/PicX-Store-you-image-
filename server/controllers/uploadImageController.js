import ethers from "ethers";
import fs from 'fs';
// import  UserSchema from "../models/User.js"
import { config } from "../config/serverConfig.js";
import pinataSDK from "@pinata/sdk";
import generateEncryptionKey from "../utils/generateKey.js";
import UserSchema from "../models/User.js";
import encryptFile from "../utils/encryption.js";


const uploadImageController = async (req, res,next) => {
  try {
    const userAddress="0x84590BFFD27CcEe8b7acd840F846eD79A6FCCD9E"
    const user=await UserSchema.findOne({userAddress:userAddress.toLowerCase()})
    if(!user){
        throw new Error("User not exist")
    }
    if(user.encryptionKey==null){
        const encryptionKey=generateEncryptionKey(32);
        user.encryptionKey=encryptionKey;
        await user.save();
    }

    // const fileBuffer = Buffer.from(req.file)
    // const {encryptedData ,iv} = encryptFile(fileBuffer,user.encryptionKey)
    
    const pinata = new pinataSDK({
      pinataApiKey: config.PINATA_API_KEY,
      pinataSecretApiKey: config.PINATA_SECRET_KEY,
    });
   
fs.readFile(req.file.path, async (err, fileBuffer) => {
    if (err) {
        return res.status(500).json({ error: "Error reading file" });
    }
    // Encrypt the file content
    let { encryptedData, iv  } = encryptFile(fileBuffer, user.encryptionKey);
    // console.log(encryptedData,"kk",iv);
    const resPinata=await pinata.pinJSONToIPFS({encryptedData,iv})
    // console.log(resPinata);
    // pinata.pinJSONToIPFS({ data: { encryptedData, iv } })
    // .then((resPinata) => {
    //     console.log(resPinata);
    //     // Do something with the response from Pinata
    // })
    // .catch((error) => {
    //     console.error(error);
    //     // Handle error
    // });
    res.status(200).json({ipfsHash:resPinata.IpfsHash ,massage: "Image Uploaded" });
});



    // "message": "Congratulations! You are communicating with the Pinata API"!"
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

export { uploadImageController };
