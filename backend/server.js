import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "cookie-session";
import bodyParser from "body-parser";

const app = express();

// Set middleware to process form data
app.use(express.urlencoded({ extended: true }));

// Set middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set middleware to parse JSON request bodies
app.use(express.json());

// Start the server and connect to the database
app.listen("5000", async () => {
	console.log(`🚀 ~ Server listening...`);
});
