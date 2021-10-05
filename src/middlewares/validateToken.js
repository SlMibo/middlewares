const jwt = require('jsonwebtoken');
const Users = require('../models/User');
require('dotenv').config();

const validateToken = async(req, res, next) => {
    const token = req.headers.token
    if (!token) {
        return res.status(400).json('Token inválido')
    }
    try {
        const { id } = await jwt.verify(token, process.env.FIRMA)
        const userInfo = await Users.find({ _id: id, status: true })

        if (!userInfo) {
            return res.status(400).json('Token inválido')
        }
        req.userRole = userInfo.role 

    } catch (err) {
        return res.status(400).json('Token inválido: '+ err)
    }
}

module.exports = validateToken