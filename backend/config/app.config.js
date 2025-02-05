import { getEnv } from "../utils/get-env.js";

const appConfig = () => ({
	NODE_ENV: getEnv("NODE_ENV", "development"),
	PORT: getEnv("PORT", "5000"),
	BASE_PATH: getEnv("BASE_PATH", "/api"),
	MONGO_URI: getEnv("MONGO_URI", ""),

	SESSION_SECRET: getEnv("SESSION_SECRET"),
	SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN"),
	SESSION_MAX_AGE: getEnv("SESSION_MAX_AGE"),

	JWT_SECRET: getEnv("JWT_SECRET"),
	JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN"),

	FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "localhost")
});

export const config = appConfig();
