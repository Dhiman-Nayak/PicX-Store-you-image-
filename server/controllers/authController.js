import ethers from "ethers"
import  UserSchema from "../models/User.js"
const authController= async (req,res)=>{
    try {
        const {signature} = req.body
        const {address} = req.query
        if(!signature){
            throw new Error("Signature invalid");
        }

        const recoveredAddress= ethers.utils.verifyMessage("Welcome to PicX",signature)
        console.log(recoveredAddress);

        if(address.toLowerCase()===recoveredAddress.toLocaleLowerCase()){

            const user= await UserSchema.findOne({userAddress:recoveredAddress.toLocaleLowerCase()})
            if(!user){
                const createdUser=await UserSchema.create({userAddress:recoveredAddress.toLocaleLowerCase()})
                console.log("User Created ::",createdUser);
            }


            res.status(200).json({massage:"Authentication Sucessfull"})
        }else{
            res.status(400).json({massage:"Authentication Failed"})

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({massage:"Internal Server Error"})
    }
}


export {authController}