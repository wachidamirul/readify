import express from "express";
import { asyncHandler } from "../utils/async-handler.js";

const indexRoutes = express.Router();

indexRoutes.get(
	`/`,
	asyncHandler(async (req, res) => {
		return res.status(200).json({
			message: "Digital Bookstore API"
		});
	})
);

export default indexRoutes;
