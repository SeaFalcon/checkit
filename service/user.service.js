const { UsersRepository } = require('../model');
const jwtUtil = require('../utils/jwt.util');

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
      const token = jwtUtil.sign(_id.toString());

      return {
        success: true,
        data: { token },
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
  async signin({ email, key }) {
    try {
      const user = await UsersRepository.findOne({ email });

      if (!user) {
        return {
          status: 'no_user',
        };
      }

      const passwordCorrent = user.checkPassword(key);

      if (!passwordCorrent) {
        return {
          status: 'nok',
          message: 'password is wrong',
        };
      }

      return {
        status: 'ok',
        token: jwtUtil.sign(user._id.toString()),
      };
    } catch (err) {
      console.error(err);

      return {
        status: 'nok',
      };
    }
  },
};
