const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema(
    {
        doctor_id: {
            type: String,
            description: '의사 ID',
        },
        available_hours: {
            type: String,
            description: '진료시간',
        },
        available_weekday: {
            type: String,
            description: '진료요일',
        },
        description: {
            type: String,
            description: '소개',
        },
        doctor_display_name: {
            type: String,
            description: '의사표시명',
        },
        doctor_image_url: {
            type: String,
            description: '의사이미지',
        },
        doctor_images: {
            type: String,
            description: '의사이미지리스트',
        },
        doctor_tel: {
            type: String,
            description: '의사연락처',
        },
        hospital_addr: {
            type: String,
            description: '병원주소',
        },
        hospital_name: {
            type: String,
            description: '병원명',
        },
        lab_addr: {
            type: String,
            description: '연구소 주소',
        },
        lab_name: {
            type: String,
            description: '연구소명',
        },
        lab_postal_code: {
            type: String,
            description: '연구소코드',
        },
        lab_receiver_name: {
            type: String,
            description: '연구소수신자명',
        },
        lab_tel: {
            type: String,
            description: '연구소연락처',
        },
        lat: {
            type: String,
            description: '위도',
        },
        lng: {
            type: String,
            description: '경도',
        },
        professional_statement: {
            type: String,
            description: '전공',
        },
        subjects: {
            type: String,
            description: '제목',
        }
    }
);

module.exports = DoctorSchema;