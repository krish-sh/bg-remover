import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.off("connection err", () => {
      console.log("mongodb server is having some issue", error);
      process.exit();
    });
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("mongooDB connection error", error);
  }
};

export default connectDB;
