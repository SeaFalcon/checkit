const express = require('express');
const {
  registerUserValidator,
} = require('../model/schemas/user/user.validator');
const userService = require('../service/user.service');
const router = express.Router();

module.exports = function (app) {
  router.get('/', (req, res) => {
    res.send('hello user router!');
  });

  router.post('/reg', registerUserValidator, async (req, res) => {
    const user = await userService.createUser(req.body);
    res.send(user);
  });

  return router;
};
