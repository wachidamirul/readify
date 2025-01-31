import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "cookie-session";
import bodyParser from "body-parser";
import { config } from "./config/app.config.js";
import indexRoutes from "./routes/index.route.js";
import errorRoutes from "./routes/error.route.js";
import logger from "./utils/logger.js";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/db.config.js";

const morganFormat = ":method :url :status :response-time ms";
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
		maxAge: config.SESSION_EXPIRES_IN,
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

// Set middleware to log HTTP requests
app.use(
	morgan(morganFormat, {
		stream: {
			write: message => {
				const logObject = {
					method: message.split(" ")[0],
					url: message.split(" ")[1],
					status: message.split(" ")[2],
					responseTime: message.split(" ")[3]
				};
				logger.info(JSON.stringify(logObject));
			}
		}
	})
);

// Set middleware to secure the app with HTTP headers
app.use(
	helmet({
		crossOriginResourcePolicy: false
	})
);

// Set middleware to handle routes
app.use(config.BASE_PATH, indexRoutes);
app.use("/", errorRoutes);

// Start the server and connect to the database
await connectDB().then(() => {
	app.listen(config.PORT, () => {
		console.log(`🚀 ~ Server listening on port ${config.PORT} in ${config.NODE_ENV} environment`);
	});
});
