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
    const result = await userService.signup(req.body);
    res.status(200).send(result);
  });

  router.post('/signin', async (req, res) => {
    const result = await userService.signin(req.body);
    res.status(200).send(result);
  });

  return router;
};
