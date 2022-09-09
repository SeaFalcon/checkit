const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports = {
  sign: (payload) => {
    return jwt.sign(payload, secret);
  },
  verify: (token) => {
    // access token 검증
    let decoded = null;

    try {
      decoded = jwt.verify(token, secret);

      console.log('jwt decoded', decoded);

      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  },
};
