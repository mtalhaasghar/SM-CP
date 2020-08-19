const mongoose = require('mongoose')
const crypto = require('crypto')
const studentSchema = new mongoose.Schema({
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
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
         trim: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        max: 15
    },
    department:{
        type: String,
        required:true

    },
    fieldSports: {
        type: String,
        required:true
    },
    category:{
        type:String,
        required:true
        
    }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)