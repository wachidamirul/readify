import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { deleteABook, getAllBooks, getSingleBook, postABook, UpdateBook } from "../controllers/book.controller.js";

const bookRoutes = express.Router();

bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getSingleBook);

bookRoutes.post("/create-book", protectRoute, postABook);
bookRoutes.put("/edit/:id", protectRoute, UpdateBook);
bookRoutes.delete("/:id", protectRoute, deleteABook);

export default bookRoutes;
