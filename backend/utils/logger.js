import { createLogger, format, transports } from "winston";

// Destructure the format object
const { combine, timestamp, colorize } = format;

// Create a Winston logger
const logger = createLogger({
	level: "info",
	transports: [
		new transports.Console({
			format: combine(
				colorize(),
				format.printf(info => `${info.level}: ${info.message}`)
			)
		}),
		new transports.File({
			filename: "app.log",
			format: combine(
				timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
			)
		})
	]
});

export default logger;
