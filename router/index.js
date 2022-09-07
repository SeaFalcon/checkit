const user = require('./user');
const auth = require('./auth');
const doctor = require('./doctor');
const std = require('./std');

module.exports = function (prefix, app) {
  app.use(`${prefix}/user`, user(app));
  app.use(`${prefix}/auth`, auth(app));
  app.use(`${prefix}/doctor`, doctor(app));
  app.use(`${prefix}/std`, std(app));
};
