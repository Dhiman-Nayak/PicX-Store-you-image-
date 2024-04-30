import dotenv from "dotenv";
dotenv.config();


export const config = {
    MONGODB_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT || 3000,
    // JWT_KEY: process.env.JWT_KEY
};
