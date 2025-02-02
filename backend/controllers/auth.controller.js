import { asyncHandler } from "../utils/async-handler.js";
import { HTTPSTATUS } from "../config/http.config.js";
import { config } from "../config/app.config.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const JWT_SECRET = config.JWT_SECRET;

const authLogin = asyncHandler(async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(HTTPSTATUS.NOT_FOUND).json({
			message: "Username and password are required"
		});
	}

	const admin = await User.findOne({ username });
	if (!admin) {
		return res.status(HTTPSTATUS.NOT_FOUND).json({
			message: "User not found"
		});
	}

	const isMatch = await admin.matchPassword(password);
	if (!isMatch) {
		return res.status(HTTPSTATUS.UNAUTHORIZED).json({
			message: "Invalid credentials"
		});
	}

	const token = jwt.sign({ id: admin._id, username: admin.username, role: admin.role }, JWT_SECRET, {
		expiresIn: config.JWT_EXPIRES_IN
	});

	return res.status(HTTPSTATUS.OK).json({
		message: "Authentication successful",
		token: token,
		user: {
			username: admin.username,
			role: admin.role
		}
	});
});

export { authLogin };
