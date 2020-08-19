const mongoose = require('mongoose')
const crypto = require('crypto')
const { strict } = require('assert')
const { stringify } = require('querystring')
const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        max: 32,
        lowercase: true
    },
    lastName: {
        type: String,
        max: 32,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        max: 15
    },
    department:{
        type: String,
        required:true,

    },
    fieldSports: {
        type: String,
        max: 15,
        lowercase: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Teacher', teacherSchema)