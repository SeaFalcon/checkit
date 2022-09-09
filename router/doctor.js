const express = require('express');
const router = express.Router();

module.exports = function (app) {
  router.get('/', (req, res) => {
    res.send('hello doctor router!');
  });

  router.get('/list', async (req, res) => {
    /* TODO: 
      "doctorList": {
        "url": "/v3/doctor/list",
        "method": "get",
        "description": "로그인한 사용자에게만 의사 목록을 내려줍니다.",
        "headers": {
          "Authorization": {
            "type": "string",
            "required": true,
            "description": "'Bearer {{ token }}'을 전달해주세요."
          }
        },
        "response": {
          "success": {
            "statusCode": 200,
            "json": {
              "status": "ok",
              "data": {
                "doctors": {
                  "type": "array",
                  "items": {
                    "id": "string",
                    "doctor_display_name": "string",
                    "doctor_image_url": {
                      "type": "string",
                      "description": "이미지 주소"
                    },
                    "hospital_name": "string",
                    "hospital_address": "string",
                    "description": "string",
                    "hospital_img": {
                      "type": "string",
                      "description": "이미지 주소"
                    }
                  }
                }
              }
            }
          }
        }
      },
    */
  });

  router.get('/', async (req, res) => {
    /* TODO:
      "doctor": {
          "url": "/v3/doctor",
          "method": "get",
          "description": "로그인한 사용자에게만 의사의 상세 정보를 내려줍니다.",
          "headers": {
            "Authorization": {
              "type": "string",
              "required": true,
              "description": "'Bearer {{ token }}'을 전달해주세요."
            }
          },
          "response": {
            "success": {
              "statusCode": 200,
              "json": {
                "status": "ok",
                "type": "array",
                "doctor": {
                  "type": "object",
                  "property": {
                    "available_hours": "string",
                    "available_weekday": "string",
                    "description": "string",
                    "doctor_display_name": "",
                    "doctor_image_url": {
                      "type": "string",
                      "description": "이미지 주소"
                    },
                    "doctor_images": {
                      "type": "array",
                      "items": {
                        "url": "string"
                      }
                    },
                    "doctor_tel": "string",
                    "doctor_tel_kakao": "string",
                    "hospital_addr": "string",
                    "hospital_name": "string",
                    "lab_addr": "string",
                    "lab_name": "string",
                    "lab_postal_code": "string",
                    "lab_receiver_name": "string",
                    "lab_tel": "string",
                    "lat": "string",
                    "lng": "string",
                    "open_hours": {
                      "type": "array",
                      "items": {}
                    },
                    "professional_statement": "string",
                    "subjects": "string"
                  }
                }
              }
            }
          }
        },
    */
  });

  return router;
};
