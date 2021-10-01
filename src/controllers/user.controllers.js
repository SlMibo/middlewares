const users = require('../models/User')
const bcrypt = require('bcrypt')
const userCtrl = {};

userCtrl.obtainUser = async(req, res) => {
    try {
        const user = await users.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        console.log('El controlador de obtainUser falló', err);
        res.status(500).json(err)
    }
}

userCtrl.obtainUsers = async(req, res) => {
    try {
        const allUsers = await users.find()
        res.status(200).json(allUsers)
    } catch (err) {
        console.log('El controlador de obtainUsers falló', err);
        res.status(500).json(err)
    }
}

userCtrl.addUser = (req, res) => {
    try {
        const { email, password } = req.body
        const encrypPass
    } catch (err) {
        
    }
}

userCtrl.modifyUser = (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

userCtrl.deleteUser = (req, res) => {
    try {
        
    } catch (err) {
        
    }
}

module.exports = userCtrl;