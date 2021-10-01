const express = require('express');
const router = express.Router();
const { userCtrl } = require('../controllers/user.controllers')

router.get('/', obtainUser())
router.get('/:id', obtainUsers())
router.post('/', addUser())
router.put('/:id', modifyUser())
router.delete('/:id', deleteUser())

module.exports = router;