import mongoose from "mongoose";

const User = new mongoose.Schema({
  userAddress: {
    type: String,
    required: true,
  },
  encryptionKey:{
    type:Buffer,
    default:null
  },
  createdAt:{
    type:Date,
    default:Date.now 
  }
});
const UserSchema=mongoose.model('user',User);
export default UserSchema
