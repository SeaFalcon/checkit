const jsonwebtoken = require('jsonwebtoken');
const { UsersRepository } = require('../model');

module.exports = {
  async signup({ email, key, name }) {
    try {
      const user = await UsersRepository.findOne({ email });

      if (user) {
        return {
          success: false,
          status: 'user_duplicate',
        };
      }

      const { _id } = await UsersRepository.create({ email, key, name });

      return {
        success: true,
        data: {
          token: jsonwebtoken.sign(_id.toString(), process.env.SECRET_KEY),
        },
      };
    } catch (err) {
      console.error(err);

      return {
        success: false,
        message: err.message,
        status: 'nok',
      };
    }
  },
};
