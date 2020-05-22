const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const movieRouter = require('./routes/movie');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/movie', movieRouter);

mongoose
  .connect("mongodb://mongo/vi-datec", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected piola"))
  .catch(err => console.log(err));

module.exports = app;
