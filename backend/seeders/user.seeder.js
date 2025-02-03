import "dotenv/config.js";
import mongoose from "mongoose";
import connectDB from "../config/db.config.js";
import UserModel from "../models/user.model.js";

const seedUsers = async () => {
  console.log("Seeding users started...");

  try {
    await connectDB();

    console.log("Clearing existing users...");
    await UserModel.deleteMany();

    const users = [
      {
        username: "admin",
        password: "password",
        role: "admin"
      },
      {
        username: "user",
        password: "password",
        role: "user"
      }
    ];

    for (const user of users) {
      const existingUser = await UserModel.findOne({ username: user.username });
      if (!existingUser) {
        const newUser = new UserModel(user);
        await newUser.save();
        console.log(`User ${user.username} created`);
      } else {
        console.log(`User ${user.username} already exists`);
      }
    }

    console.log("Seeding users completed.");
  } catch (error) {
    console.error("Seeding users failed:", error);
  } finally {
    console.log("Closing database connection...");
    await mongoose.disconnect();
    console.log("Database connection closed.");
  }
};

seedUsers().catch(error => {
  console.error("Error running seed script:", error);
  mongoose.disconnect().then(() => {
    console.log("Database connection closed due to error.");
  });
});
