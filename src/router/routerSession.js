const express = require('express')
const { loginController, logoutController } = require('../controller/session/sessionController')
const router = express.Router()



router.get('/login', loginController)

router.get('/logout', logoutController)

module.exports = router