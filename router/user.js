const express = require('express');
const userService = require('../service/user.service');
const router = express.Router();

module.exports = function (app) {
  router.get('/', (req, res) => {
    res.send('hello user router!');
  });

  router.post('/reg', async (req, res) => {
    const user = await userService.createUser(req.body);
    res.send(user);
  });

  return router;
};
