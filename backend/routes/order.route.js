import express from "express";
import { createAOrder, getOrderByEmail } from "../controllers/order.controller.js";

const orderRoutes = express.Router();

orderRoutes.post("/", createAOrder);
orderRoutes.get("/email/:email", getOrderByEmail);

export default orderRoutes;
