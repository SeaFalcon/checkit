const Joi = require('joi');
const logger = require('../../../logger');

module.exports = {
    async registerStdValidator(req, res, next) {
        const body = req.body;

        console.log('registerStdValidator', body);
        const schema = Joi.object().keys({
            doctor_id: Joi.string().required(),
            address: Joi.string().required(),
            address_code: Joi.string().required(),
            store_address: Joi.string().required()
        });

        try {
            await schema.validateAsync(body);
        } catch (err) {
            logger.error('[std dto]', err);
            return res.status(200).send({ status: 'nok', message: err.message });
        }

        next();
    }
};