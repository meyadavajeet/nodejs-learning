import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb://localhost:27017/express_error"
    );
    console.log(`Connected with ${connection.host}`);
  } catch (err) {
    console.error(err);
  }
};
