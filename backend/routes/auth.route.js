import express from "express";
import { authLogin } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/admin", authLogin);

export default authRoutes;
