import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { HTTPSTATUS } from "../config/app.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorRoutes = express.Router();

errorRoutes.use(express.static(path.join(__dirname, "..", "public")));

errorRoutes.get("^/$|/index(.html)?", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

errorRoutes.all("*", (req, res) => {
	res.status(HTTPSTATUS.NOT_FOUND);
	if (req.accepts("html")) {
		res.sendFile(path.join(__dirname, "..", "public", "404.html"));
	} else if (req.accepts("json")) {
		res.json({ message: "404 Not Found" });
	} else {
		res.type("txt").send("404 Not Found");
	}
});

export default errorRoutes;
