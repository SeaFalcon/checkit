const authJWT = require('../middlewares/auth.middleware');
const {
  registerUserValidator,
} = require('../model/schemas/user/user.validator');
const userService = require('../service/user.service');

module.exports = function (express, app) {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.send('hello user router!');
  });

  router.post('/reg', registerUserValidator, async (req, res) => {
    const result = await userService.signup(req.body);
    res.status(200).send(result);
  });

  router.post('/unreg', authJWT, async (req, res) => {
    const result = await userService.withdrawl(req.user);
    res.status(200).send(result);
  });

  return router;
};
