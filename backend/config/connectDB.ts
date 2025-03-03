import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URI){
            throw new Error("MONGO_URL is not defined in .env file");
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the database")
    } catch (error) {
        console.error("❌ Error connecting to the database:", error);
    }
}

export default connectDB;