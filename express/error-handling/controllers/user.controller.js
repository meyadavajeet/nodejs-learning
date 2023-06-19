import { catchAsyncError } from "../middleware/catch.async.error.js";
import { User } from "../models/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const newUser = catchAsyncError(async (req, res, next) => {
  let userExist = await User.findOne({ email: "ajeet@gmail.com" });
  if (userExist) {
    return next(new ErrorHandler("User already exists", 409));
  }

  await User.create({
    name: "Ajeet",
    email: "ajeet@gmail.com",
  });

  res.send({
    success: true,
    message: "User successfully created",
  });
});
