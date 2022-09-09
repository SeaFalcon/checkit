const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

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

UserSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('key')) {
    // password가 변경될 때만 Hashing 실행
    // genSalt: salt 생성
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.key, salt, function (err, hashedPassword) {
        // hash의 첫번째 인자: 비밀번호의 Plain Text
        if (err) return next(err);
        user.key = hashedPassword; // 에러없이 성공하면 비밀번호의 Plain Text를 hashedPassword로 교체해줌
        next(); // Hashing이 끝나면 save로 넘어감
      });
    });
  } else {
    // password가 변경되지 않을 때
    next(); // 바로 save로 넘어감
  }
});

UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.key);
};

module.exports = UserSchema;
