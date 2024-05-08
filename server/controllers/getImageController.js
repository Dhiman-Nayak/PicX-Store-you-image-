import ethers from "ethers";
import { config } from "../config/serverConfig.js";
import UserSchema from "../models/User.js";
import decryptFile from "../utils/decryption.js"
import axios from "axios"

const returnIpfsResponse = async (ipfsHash)=>{
  const PINATA_GATEWAY_URL=`https://gateway.pinata.cloud/ipfs/${ipfsHash}`
  const res = await axios(PINATA_GATEWAY_URL)
  return res.data
}

const getImageController = async (req,res,next) => {
  try {
    const userAddress = req.address;
    const user = await UserSchema.findOne({
      userAddress: userAddress.toLowerCase(),
    });
    // console.log(user.encryptionKey);
    if (!user) {
      throw new Error("User not exist");
    }
    const {page,limit}=req.query
    const pageNumber = parseInt(page) || 1
    const limitNumber = parseInt(limit) || 1
    const si=(pageNumber-1)*limitNumber
    const ei=(pageNumber*limitNumber)
    if(pageNumber<1  || limitNumber<1){
      throw new Error("Pagination error")
    }
    const ipfsHashArray=req.body.slice(si,Math.min(req.body.length,ei))
    console.log(user.userAddress,ipfsHashArray.length);

    const decryptedImageArr=[]
    if(ipfsHashArray.length>0){
      const encryptedDataArray=await Promise.all(ipfsHashArray.map(async (ipfsHash)=>{
        const res= await returnIpfsResponse(ipfsHash)
        return res
      }))
      // console.log(encryptedDataArray);
      for(const img of encryptedDataArray){
        // console.log(img);
        // console.log(user.encryptionKey);
        const decryptImgData= decryptFile(img.encryptedData,img.iv,user.encryptionKey)
        // console.log("gg",decryptImgData);
        decryptedImageArr.push(decryptImgData.toString('base64'))
      }
    }

    // console.log(decryptedImageArr);

    res.status(200).json({ massage: "Image Sent Successfully" ,decryptedImageArr});
  } catch (error) {
    console.log("Failed to Retreived the message",error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};
export default getImageController;
