const mongoose = require('mongoose');
const UserSchema = require('./schemas/user/user.schema');

module.exports = {
  UsersRepository: mongoose.model('User', UserSchema),
};
