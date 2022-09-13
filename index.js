const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env.dev') });

const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const logger = require('./logger');
const { connectWithRetry } = require('./utils/db.util');

const combined =
  ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
// 기존 combined 포멧에서 timestamp만 제거
const morganFormat = process.env.NODE_ENV !== 'production' ? 'dev' : combined; // NOTE: morgan 출력 형태 server.env에서 NODE_ENV 설정 production : 배포 dev : 개발
// console.log(morganFormat);

const app = express();
const port = process.env.PORT || 3000;

connectWithRetry(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(morganFormat, { stream: logger.stream })); // morgan 로그 설정

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
  logger.error(err.stack);
  next(err);
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

router('/v3', app, express);

app.listen(port, () => logger.info(`Server Start Listening on port ${port}`));
