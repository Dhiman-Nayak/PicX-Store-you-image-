import mongoose from "mongoose"

// const connectDB= (url)=>{
//     return mongoose.connect(url);
// }

const connectDB = async (url)=>{
    try {
        const connectionInstance=await mongoose.connect(url)
        console.log(`Mongodb connected .. Db Host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1)
    }
 }
export default connectDB;