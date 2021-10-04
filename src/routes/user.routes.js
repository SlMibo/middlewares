const express = require('express');
const router = express.Router();
const {
    obtainUser,
    obtainUsers,
    addUser,
    modifyUser,
    deleteUser
} = require('../controllers/user.controllers')

router.get('/:id', obtainUser)
router.get('/', obtainUsers)
router.post('/', addUser)
router.put('/:id', modifyUser)
router.put('/delete/:id', deleteUser)

module.exports = router;