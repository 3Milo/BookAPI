const express = require('express');

// this function can be used for multiple routers!

function routes(Record) {
	const router = express.Router();

	router.route('/books')
		.post((req, res) => {
			const book = new Record(req.body);

			console.log(book);
			return res.json(book);
		})
		.get((req, res) => {
			// const {query} = req; //ES6 destructuring
			const query = {};
			if (req.query.genre) {
				query.genre = req.query.genre;
			}
			Record.find(query, (err, books) => {
				return err ? res.send(err) : res.json(books);
			});
		});

	router.route('/books/:bookId')
		.get((req, res) => {
			console.log('---> ', req.params.bookId);
			Record.findById(req.params.bookId, (err, book) => {
				return err ? res.send(err) : res.json(book);
			});
		});

	return router;
}

module.exports = routes;