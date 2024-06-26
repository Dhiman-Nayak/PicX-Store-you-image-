import express from "express";
import authenticationRoute from "./routes/authenticationRoute.js"
import uploadImageRoute from "./routes/uploadImageRoute.js"
import getImageRoute from "./routes/getImageRoute.js"

import cors from "cors";
import {config} from "./config/serverConfig.js"
import connectDB from "./db/connectDB.js";



const app=express();

app.use(cors())
app.use(express.json())
app.use("/api",authenticationRoute)
app.use("/api",uploadImageRoute)
app.use("/api",getImageRoute)

const serverStart= async ()=>{
    try {
        await connectDB(config.MONGODB_URL)
        app.listen(config.PORT,()=>{
            console.log("running");
        })
    } catch (error) {
        console.log("Connection rror:: ",error);
    }
}
serverStart()

