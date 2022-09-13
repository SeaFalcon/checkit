const mongoose = require('mongoose');
const dbURI = process.env.MONGO_URI || '127.0.0.1:27017';

function connectWithRetry(logger) {
  return mongoose.connect(dbURI, function (err) {
    if (err) {
      logger.error(
        'Failed to connect to mongo on startup - retrying in 5 sec',
        err
      );
      setTimeout(() => connectWithRetry(logger), 5000);
    }
  });
}

module.exports = {
  connectWithRetry,
};
