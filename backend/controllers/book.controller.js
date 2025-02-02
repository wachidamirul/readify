import { HTTPSTATUS } from "../config/http.config.js";
import Book from "../models/book.model.js";
import { asyncHandler } from "../utils/async-handler.js";

const postABook = asyncHandler(async (req, res) => {
	const newBook = await Book({ ...req.body });
	await newBook.save();
	res.status(HTTPSTATUS.OK).send({ message: "Book posted successfully", book: newBook });
});

const getAllBooks = asyncHandler(async (req, res) => {
	const books = await Book.find().sort({ createdAt: -1 });
	res.status(HTTPSTATUS.OK).send(books);
});

const getSingleBook = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const book = await Book.findById(id);
	if (!book) {
		res.status(404).send({ message: "Book not Found!" });
	}

	res.status(HTTPSTATUS.OK).send(book);
});
const UpdateBook = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const book = await Book.findById(id);
	if (!book) {
		res.status(404).send({ message: "Book not Found!" });
	}
	const updated = await Book.findByIdAndUpdate(id, req.body, { new: true });
	res.status(HTTPSTATUS.OK).send({
		message: "Book updated successfully",
		book: updated
	});
});

const deleteABook = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const book = await Book.findById(id);
	if (!book) {
		res.status(404).send({ message: "Book not Found!" });
	}
	await Book.findByIdAndDelete(id);
	res.status(HTTPSTATUS.OK).send({ message: "Book deleted successfully" });
});

export { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook };
