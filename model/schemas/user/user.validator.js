const Joi = require('joi');

module.exports = {
  async registerUserValidator(req, res, next) {
    const body = req.body;
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      key: Joi.string().required(),
      name: Joi.string().required(),
    });

    try {
      await schema.validateAsync(body);
    } catch (err) {
      console.error(err);
      return res.status(200).send({ status: 'nok', message: err.message });
    }

    next();
  },

  async signinUserValidator(req, res, next) {
    const body = req.body;
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      key: Joi.string().required(),
    });

    try {
      await schema.validateAsync(body);
    } catch (err) {
      console.error(err);
      return res.status(200).send({ status: 'nok', message: err.message });
    }

    next();
  },
};
