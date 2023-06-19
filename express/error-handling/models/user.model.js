import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Please enter name"],
  },
  email: {
    type: "string",
    required: [true, "Please enter email"],
    unique: true,
  },
});

export const User = mongoose.model("User", userSchema);
