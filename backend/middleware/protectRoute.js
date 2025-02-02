import jwt from "jsonwebtoken";
import { config } from "../config/app.config.js";
import { HTTPSTATUS } from "../config/http.config.js";

const JWT_SECRET = config.JWT_SECRET;

const protectRoute = (req, res, next) => {
	const token = req.headers["authorization"]?.split(" ")[1];

	if (!token) {
		return res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: "Access Denied. No token provided" });
	}
	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(HTTPSTATUS.FORBIDDEN).json({ message: "Invalid credientials" });
		}
		req.user = user;
		next();
	});
};

export default protectRoute;
