const mongoose = require('mongoose');
const UserSchema = require('./schemas/user/user.schema');
const DoctorSchema = require('./schemas/doctor/doctor.schema');
const StdSchema = require('./schemas/doctor/doctor.schema');

module.exports = {
  UsersRepository: mongoose.model('User', UserSchema),
  DoctorsRepository: mongoose.model('Doctor', DoctorSchema),
  StdsRepository: mongoose.model('Std', StdSchema)
};
