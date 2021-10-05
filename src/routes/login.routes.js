const router = require('express').Router()
const { loginCtrl } = require('../controllers/login.controllers')

router.post('/', loginCtrl)

module.exports = router