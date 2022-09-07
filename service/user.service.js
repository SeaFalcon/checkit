const { UsersRepository } = require('../model');

module.exports = {
  async createUser(createUserDto) {
    try {
      const user = await UsersRepository.create(createUserDto);

      return {
        success: true,
        user,
      };
    } catch (err) {
      console.error(err);

      return {
        success: false,
        message: err.message,
      };
    }
  },
};
