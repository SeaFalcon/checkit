const { UsersRepository } = require('../model');
const jwtUtil = require('../utils/jwt.util');

module.exports = {
  async findById(userId) {
    const user = await UsersRepository.findById(userId, {
      email: 1,
      name: 1,
      isDeleted: 1,
    });

    return user;
  },
  async signup({ email, key, name }) {
    try {
      const user = await UsersRepository.findOne({ email });

      if (user) {
        return {
          status: 'user_duplicate',
        };
      }

      const { _id } = await UsersRepository.create({ email, key, name });
      const token = jwtUtil.sign(_id.toString());

      return {
        data: { token },
      };
    } catch (err) {
      console.error(err);

      return {
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

      if (user.isDeleted) {
        return {
          status: 'nok',
          message: 'withdrawl user',
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
  async withdrawl(user) {
    await UsersRepository.updateOne(
      { _id: user._id },
      { $set: { isDeleted: true } }
    );

    return {
      status: 'ok',
    };
  },
};
