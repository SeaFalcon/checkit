const Joi = require('joi');
const logger = require('../../../logger');

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
      logger.error('[signup dto]', err);
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
      logger.error('[signin dto]', err);
      return res.status(200).send({ status: 'nok', message: err.message });
    }

    next();
  },
};
