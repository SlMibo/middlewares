const Users = require('../models/User.js')
const createToken = require('../helpers/createToken.js')
const bcrypt = require('bcrypt')

const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Users.findOne({ email })
        if (!user){
            res.status(400).json('Credenciales incorrectas')
        }
        const existUser = await bcrypt.compare(password, user.password)
        if (!existUser){
            res.status(400).json('Credenciales incorrectas')
        }
        const token = await createToken(user._id)
        res.status(200).json({ token })
    } catch (err) {
        console.error('Hubo un error en el controlador de loginCtrl')
        res.status(404).json(err)
    }
}

module.exports = { loginCtrl }