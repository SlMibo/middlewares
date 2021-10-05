const express = require('express');
const router = express.Router();
const { obtainUser, obtainUsers, addUser, modifyUser, deleteUser
} = require('../controllers/user.controllers')
const { validAddUser, validEditUser, validInfo,
    validDeleteUser } = require('../middlewares/validInfoUsers')
const validateToken = require('../middlewares/validateToken')

router.get('/api/get-user/:id', obtainUser)
router.get('/api/get-user', obtainUsers)
router.post('/api/create-user', [ validAddUser(), validInfo ],addUser)
router.put('/api/edit-user/:id', [ validEditUser(), validInfo, validateToken ],modifyUser)
router.put('/api/delete-user', [ validDeleteUser(), validInfo, validateToken ], deleteUser)

module.exports = router;