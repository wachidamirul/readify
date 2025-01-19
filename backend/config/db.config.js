import mongoose from "mongoose";
import { config } from "./app.config.js";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(config.MONGO_URI);
		console.log(`🚀 ~ MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error("🚀 ~ DB connection error:", error.message);
		process.exit(1);
	}
};

export default connectDB;
