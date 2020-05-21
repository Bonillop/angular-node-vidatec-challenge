const express = require('express');
// const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const csvRouter = require('./routes/csv');

const app = express();

// app.use(cors({origin: "*"}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/csv', csvRouter);

module.exports = app;
