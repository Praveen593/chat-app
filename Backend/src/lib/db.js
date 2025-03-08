import {mongoose} from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URI);
        console.log(`MongoDB connected successfully :${conn.connection.host}`);

    } catch (error)
    {
        console.log("MongoDB connection is error :", error);
    }
};