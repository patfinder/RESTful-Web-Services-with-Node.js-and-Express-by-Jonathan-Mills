const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

const app = express();

const port = process.env.PORT || 3000;
if (process.env.ENV === 'Test') {
  mongoose.connect('mongodb://localhost/test');
} else {
  mongoose.connect('mongodb://localhost/dev');
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', bookRouter);

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
