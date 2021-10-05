const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ id }, process.env.FIRMA, (err, token) => {
            if (err) {
                reject('Error con el token', err)
            }
            resolve(token)
        })
    })
}

module.exports = createToken