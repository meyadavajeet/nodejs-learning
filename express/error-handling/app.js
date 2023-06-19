import express from "express";
import userRoute from "./routers/user.route.js";
import errorMiddleWare from "./middleware/Error.js";
import { connectDB } from "./config/connect.db.js";

const app = express();

//database function called
connectDB();

app.get("/", (req, res) => {
  res.send({
    message: "Server is working",
  });
});

app.use("/users", userRoute);

app.listen(5500, () => {
  console.log("server is working!!!");
});

app.use(errorMiddleWare);
