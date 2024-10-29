import mongoose from "mongoose";

export const mongoDbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerceApp");
    console.log("MongoDb Database connected successfully✅");
  } catch (error) {
    console.log(`MongoDb Database connection error: ${error}`);
  }
};
