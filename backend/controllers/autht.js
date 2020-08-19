const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Teacher = require('../models/teacher')
process.env.SECERET_KEY = 'SECERET'

exports.teacherSignup = (req, res) => {
    const teacherData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        cnicNumber:req.body.cnicNumber,
        department:req.body.department,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        fieldSports: req.body.fieldSports
    }
    Teacher.findOne({
        email: req.body.email,
    })
    .then(teacher => {
        if(!teacher){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                teacherData.password = hash
                Teacher.create(teacherData)
                .then(teacher => {
                    res.json({ status: teacher.email + 'registered!' })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        } else res.json({ error: 'Teacher Already Exists' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}
exports.teacherLogin = (req, res) => {
    Teacher.findOne({
        email: req.body.email,
    })
    .then(teacher => {
        if(teacher) {
            if(bcrypt.compareSync(req.body.password, teacher.password)) {
                const payload = {
                    _id: teacher._id,
                    firstName: teacher.firstName,
                    lastName: teacher.lastName,
                    email: teacher.email,
                    cnicNumber:teacher.cnicNumber,
                    department:teacher.department,
                    phoneNumber: teacher.phoneNumber,
                    fieldSports: teacher.fieldSports
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