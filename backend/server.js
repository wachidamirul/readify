import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "cookie-session";
import bodyParser from "body-parser";
import { config } from "./config/app.config.js";
import indexRoutes from "./routes/index.route.js";
import publicRoutes from "./routes/public.route.js";

const app = express();

// Set middleware to process form data
app.use(express.urlencoded({ extended: true }));

// Use CORS for Cross Origin Resource Sharing
app.use(
	cors({
		origin: config.FRONTEND_ORIGIN,
		credentials: true
	})
);

// Set middleware to manage sessions
app.use(
	session({
		name: "session",
		keys: [config.SESSION_SECRET],
		maxAge: 24 * 60 * 60 * 1000,
		secure: config.NODE_ENV === "production",
		httpOnly: true,
		sameSite: "lax"
	})
);

// Set middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set middleware to parse JSON request bodies
app.use(express.json());

// Set middleware to handle routes
app.use(publicRoutes);
app.use(config.BASE_PATH, indexRoutes);

// Start the server and connect to the database
app.listen(config.PORT, async () => {
	console.log(`🚀 ~ Server listening on port ${config.PORT} in ${config.NODE_ENV} environment`);
});
