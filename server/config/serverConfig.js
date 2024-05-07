import dotenv from "dotenv";
dotenv.config();


export const config = {
    MONGODB_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT || 3000,
    // JWT_KEY: process.env.JWT_KEY,
    PINATA_API_KEY:process.env.PINATA_API_KEY,
    PINATA_SECRET_KEY:process.env.PINATA_SECRET_KEY,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY

};
