const authJWT = require('../middlewares/auth.middleware');
const stdService = require('../service/std.service');
const { registerStdValidator } = require('../model/schemas/std/std.validator');

module.exports = function (express) {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.send('hello std router!');
  });

  router.post('/reg', authJWT, registerStdValidator, async (req, res) => {
    const result = await stdService.regStd(req.body);
    res.status(200).send(result);

    /* TODO:
      "register": {
          "url": "/v3/std/reg",
          "method": "post",
          "description": "검사 신청",
          "headers": {
            "Authorization": {
              "type": "string",
              "required": true,
              "description": "'Bearer {{ token }}'을 전달해주세요."
            }
          },
          "body": {
            "doctor_id": "string",
            "address": "string",
            "address_code": "string",
            "store_address": "string"
          },
          "response": {
            "success": {
              "statusCode": 200,
              "json": {
                "status": "ok"
              }
            },
            "fail": {
              "statusCode": 200,
              "json": {
                "stats": "nok",
                "data": {
                  "message": "string"
                }
              }
            }
          }
        }  

    */
  });

  return router;
};
