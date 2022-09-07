const express = require('express');
const router = express.Router();

module.exports = function (app) {
  router.get('/', (req, res) => {
    res.send('hello user router!');
  });

  return router;
};
