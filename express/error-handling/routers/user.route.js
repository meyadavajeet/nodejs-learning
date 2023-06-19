import express from "express";
import { newUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/get", newUser);

export default router;
