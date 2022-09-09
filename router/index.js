const user = require('./user');
const auth = require('./auth');
const doctor = require('./doctor');
const std = require('./std');
module.exports = function (prefix, app) {
  app.get('/health-check', (req, res) => {
    res.send('hello world');
  });

  app.get(`${prefix}/test`, (req, res) => {
    res.status(200).send({});
  });

  app.use(`${prefix}/user`, user(app));
  app.use(`${prefix}/auth`, auth(app));
  app.use(`${prefix}/doctor`, doctor(app));
  app.use(`${prefix}/std`, std(app));
};
