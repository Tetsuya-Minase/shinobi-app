const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
// ログ
const winston = require('winston');
require('winston-daily-rotate-file');

// router
const apiRouter = require('./routes/api');

const app = express();

// ログ設定
const logFormat = winston.format.printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});
const appLogRotate = new (winston.transports.DailyRotateFile)({
  filename: 'log/server-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'info'
});
const errorLogRotate = new (winston.transports.DailyRotateFile)({
  filename: 'log/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'error'
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    logFormat
  ),
  transports: [
    appLogRotate,
    errorLogRotate
  ]
});

// 最低限落ちないようにしておく
process.on('uncaughtException', function(err) {
  logger.error(err)
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));
app.use(helmet());
app.disable('x-powered-by');

// ルーティング
app.use('/api', apiRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  logger.error(`404 not found [url:${req.url}]`);
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // log error
  logger.error(`500 internal server error [err:${err}]`);

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
