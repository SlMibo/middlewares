const users = require('../models/User')
const bcrypt = require('bcrypt')

const obtainUser = async(req, res) => {
    try {
        const user = await users.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        console.log('El controlador de obtainUser falló', err);
        res.status(404).json(err)
    }
}

const obtainUsers = async(req, res) => {
    try {
        const allUsers = await users.find()
        res.status(200).json(allUsers)
    } catch (err) {
        console.log('El controlador de obtainUsers falló', err);
        res.status(500).json(err)
    }
}

const addUser = async(req, res) => {
    try {
        const { email, password, role } = req.body
        const encrypPass = await bcrypt.hash(password, 10)
        const newUser = new users({email, password: encrypPass, role})
        console.log(newUser)
        newUser.save()
        res.status(201).json('Se ha registrado con éxito')
    } catch (err) {
        res.status(401).json(err)
    }
}

const modifyUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        const newPass = await bcrypt.hash(password, 10)
        await users.findByIdAndUpdate(req.params.id, { email, password: newPass })
        res.status(203).json('Los cambios fueron hechos!')
    } catch (err) {
        res.status(403).json(err)
    }
}

const deleteUser = async(req, res) => {
    try {
        await users.findByIdAndUpdate(req.body.id, { estado: false })
        res.status(203).json('El usuario ha sido eliminado')
    } catch (err) {
        res.status(403).json(err)
    }
}

module.exports = {
    obtainUser,
    obtainUsers,
    addUser,
    modifyUser,
    deleteUser
};