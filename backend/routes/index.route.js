import express from "express";
import { asyncHandler } from "../utils/async-handler.js";
import { HTTPSTATUS } from "../config/http.config.js";
import authRoutes from "./auth.route.js";
import bookRoutes from "./book.route.js";
import orderRoutes from "./order.route.js";
import dashboardRoutes from "./dashboard.route.js";

const indexRoutes = express.Router();

indexRoutes.get(
	`/`,
	asyncHandler(async (req, res) => {
		return res.status(HTTPSTATUS.OK).json({
			message: "Digital Bookstore API"
		});
	})
);

indexRoutes.use("/auth", authRoutes);
indexRoutes.use("/books", bookRoutes);
indexRoutes.use("/orders", orderRoutes);
indexRoutes.use("/admin", dashboardRoutes);

export default indexRoutes;
