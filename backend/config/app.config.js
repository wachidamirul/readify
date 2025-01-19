import { getEnv } from "../utils/get-env.js";

const appConfig = () => ({
	NODE_ENV: getEnv("NODE_ENV", "development"),
	PORT: getEnv("PORT", "5000"),
	BASE_PATH: getEnv("BASE_PATH", "/api"),
	MONGO_URI: getEnv("MONGO_URI", ""),

	SESSION_SECRET: getEnv("SESSION_SECRET"),
	SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN"),

	JWT_SECRET: getEnv("JWT_SECRET"),
	JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN"),

	FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "localhost")
});

const httpConfig = () => ({
	// Success responses
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NO_CONTENT: 204,

	// Client error responses
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	CONFLICT: 409,
	UNPROCESSABLE_ENTITY: 422,
	TOO_MANY_REQUESTS: 429,

	// Server error responses
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504
});

export const config = appConfig();
export const HTTPSTATUS = httpConfig();
