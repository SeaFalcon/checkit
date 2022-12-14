const { signinUserValidator } = require('../model/schemas/user/user.validator');
const userService = require('../service/user.service');

module.exports = function (express) {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.send('hello auth router!');
  });

  router.post('/login', signinUserValidator, async (req, res) => {
    const result = await userService.signin(req.body);
    res.status(200).send(result);
  });

  return router;
};
