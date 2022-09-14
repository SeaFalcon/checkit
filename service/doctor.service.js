const { DoctorsRepository } = require('../model');

module.exports = {
    async getDoctorList() {
        try {
            const result = await DoctorsRepository.find();
            // result 가공
            return { data: { doctors: [{}, {}] } }
        } catch (err) {
            return { status: 'nok' }
        }
    },
    async getDoctor(body) {
        try {
            const result = await DoctorsRepository.findOne({ doctor_id: body.doctor_id });
            return { data: result }
        } catch (err) {
            return { status: 'nok' }
        }
    }
};