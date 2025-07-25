import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}

export default connectDB;
