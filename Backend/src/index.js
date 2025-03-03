import express from "express";
import authRoutes from "../src/routes/auth.routes.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";

dotenv.config()


const app = express();
const PORT = process.env.PORT;

app.use("/api/auth" , authRoutes);

app.listen(PORT , () => {
    console.log("server is running on port : " + PORT );
    connectDB();                                                      // ---> 27/02/2025

    //the mongoDB is not connect and check with locally and as will as in atles 
    // also once again check the installation of mongodb and compass locally 
})