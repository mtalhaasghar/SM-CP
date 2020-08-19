const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const authtController = require('../controllers/autht')
const authenticateController = require('../controllers/authentAdmin')

router.post('/AdminSignup',authenticateController.AdminSignup)
router.post('/AdminLogin', authenticateController.adminLogin)
router.post('/studentSignup', authController.studentSignup)
router.post('/studentLogin', authController.studentLogin)
router.post('/teacherSignup', authtController.teacherSignup)
router.post('/teacherLogin', authtController.teacherLogin)

module.exports = router