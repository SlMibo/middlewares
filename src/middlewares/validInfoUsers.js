const { check, validationResult } = require('express-validator');

const validAddUser = () => {
    return [
        check('email', 'Email inválido')
            .isEmail()
            .normalizeEmail()
            .trim()
            .escape(),
        check('password', 'Contraseña inválida')
            .trim()
            .escape()
            .isLength({min: 8})
    ]
}

const validEditUser = () => {
    return [
        check('email', 'Email inválido')
            .isEmail()
            .normalizeEmail()
            .trim()
            .escape(),
        check('password', 'Contraseña inválida')
            .trim()
            .escape()
            .isLength({min: 8})
    ]
}

const validDeleteUser = () => {
    return [
        check('id', 'Id inválida')
            .isMongoId()
            .trim()
            .escape()
    ]
}

const validInfo = (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        res.status(400).json('Parámetros inválidos '+ err)
    }
    next()
}

module.exports = { validAddUser, 
                    validEditUser, 
                    validInfo,
                    validDeleteUser }