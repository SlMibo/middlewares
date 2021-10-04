//-------------El esquema define qué guardo en la BD,----------------
//---a partir del Schema, model permite tener métodos y propiedades----
//----------Ambos permiten definir un modelo de datos--------------
const { Schema, model } = require('mongoose');

//-------------Usado para encriptar contraseña----------------
// const bcrypt = require('bcryptjs');

//------------------Esquema en BD-----------------
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    role: {type: String, default: 'user'},
    status: {type: Boolean, default: true}
}, {
    //-----------------Fechas de creación y actualización-------------
    timestamps: true
});

module.exports = model('User', UserSchema)