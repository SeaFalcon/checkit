const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      description: '이메일 주소',
      validate: {
        validator: function (value) {
          // return value.isEmail();
          return true;
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    key: {
      type: String,
      required: true,
      description: '패스워드',
    },
    name: {
      type: String,
      description: '사용자의 이름',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
