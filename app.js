const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/test');
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
