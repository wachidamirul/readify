import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { dashboard } from "../controllers/dashboard.controller.js";

const dashboardRoutes = express.Router();

dashboardRoutes.get("/", protectRoute, dashboard);

export default dashboardRoutes;
