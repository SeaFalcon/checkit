const { StdsRepository, DoctorsRepository } = require('../model');

module.exports = {
    async regStd({ doctor_id, address, address_code, store_address }) {
        try {
            const checkId = await DoctorsRepository.findOne({ doctor_id: doctor_id }, { doctor_id: 1 });
            if(checkId) {
                const result = await StdsRepository.create({ doctor_id, address, address_code, store_address });
                if(result) {
                    return { status: 'ok' }
                } else {
                    return { status: `regist not permitted` }
                }
            } else {
                return { status: `doctor ID doesn't exist` }
            }
        } catch(err) {
            return { status: 'nok', data: { msg: 'regist failed' } }
        }
    }
};