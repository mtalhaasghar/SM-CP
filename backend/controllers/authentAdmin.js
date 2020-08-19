const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')
process.env.SECERET_KEY = 'SECERET'

exports.AdminSignup = (req, res) => {
    const adminData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    }
    Admin.findOne({
        email: req.body.email,
    })
    .then(admin => {
        if(!admin){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                adminData.password = hash
                Admin.create(adminData)
                .then(admin => {
                    res.json({ status: admin.email + 'registered!' })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        } else res.json({ error: 'admin Already Exists' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}
exports.adminLogin = (req, res) => {
    Admin.findOne({
        email: req.body.email,
    })
    .then(admin => {
        if(admin) {
            if(bcrypt.compareSync(req.body.password, admin.password)) {
                const payload = {
                    _id: admin._id,
                    firstName: admin.firstName,
                    lastName: admin.lastName,
                    email: admin.email,
                    phoneNumber: admin.phoneNumber
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