const mongoose = require('mongoose');

const StdSchema = new mongoose.Schema(
    {
        doctor_id: {
            type: String,
            description: '의사 ID',
        },
        address: {
            type: String,
            description: '주소',
        },
        address_code: {
            type: String,
            description: '주소코드',
        },
        store_address: {
            type: String,
            description: '상점주소',
        }
    }
);

module.exports = StdSchema;