const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Student = require('../models/student')
process.env.SECERET_KEY = 'SECERET'

exports.studentSignup = (req, res) => {
    const studentData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        rollNumber: req.body.rollNumber,
        registrationNumber: req.body.registrationNumber,
        phoneNumber: req.body.phoneNumber,
        department:req.body.department,
        fieldSports: req.body.fieldSports,
        category:req.body.category
    }
    Student.findOne({
        rollNumber: req.body.rollNumber
    })
    .then(student => {
        if(!student){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                studentData.password = hash
                Student.create(studentData)
                .then(student => {
                    res.json({ status: student.rollNumber + 'registered!' })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        } else res.json({ error: 'Student Already Exists' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}
exports.studentLogin = (req, res) => {
    Student.findOne({
        rollNumber: req.body.rollNumber
    })
    .then(student => {
        if(student) {
            if(bcrypt.compareSync(req.body.password, student.password)) {
                const payload = {
                    _id: student._id,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    email: student.email,
                    registrationNumber: student.registrationNumber,
                    rollNumber: student.rollNumber,
                    phoneNumber: student.phoneNumber,
                    fieldSports: student.fieldSports,                    
                    category:req.body.category,
                    department:req.body.department
                }
                let token = jwt.sign(payload, process.env.SECERET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
            else res.json({ error: "User does not exist" })
        } else res.json({ error: "User does not exist" })
    })
    .catch( err => {
        res.send('error: ' + err)
    })
}