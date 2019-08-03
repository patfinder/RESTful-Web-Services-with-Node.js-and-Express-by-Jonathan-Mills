const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

const app = express();

const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/test');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
