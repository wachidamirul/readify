import express from "express";
import { asyncHandler } from "../utils/async-handler.js";
import { HTTPSTATUS } from "../config/http.config.js";

const indexRoutes = express.Router();

indexRoutes.get(
	`/`,
	asyncHandler(async (req, res) => {
		return res.status(HTTPSTATUS.OK).json({
			message: "Digital Bookstore API"
		});
	})
);

export default indexRoutes;
