const user = require('./user');
const auth = require('./auth');
const doctor = require('./doctor');
const std = require('./std');
module.exports = function (prefix, app, express) {
  app.get('/health-check', (req, res) => {
    res.send('hello world');
  });

  app.get(`${prefix}/test`, (req, res) => {
    res.status(200).send({});
  });

  app.use(`${prefix}/user`, user(express));
  app.use(`${prefix}/auth`, auth(express));
  app.use(`${prefix}/doctor`, doctor(express));
  app.use(`${prefix}/std`, std(express));
};
