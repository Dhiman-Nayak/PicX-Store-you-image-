import express from "express";
import authenticationRoute from "./routes/authenticationRoute.js"

import cors from "cors";
import {config} from "./config/serverConfig.js"
import connectDB from "./db/connectDB.js";



const app=express();

app.use(cors())
app.use(express.json())
app.use("/api",authenticationRoute)

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

