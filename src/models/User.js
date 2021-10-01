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


//----------------Encriptado de contraseña----------------
// UserSchema.methods.encrypPass = async password => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
// };

//-----Comparación de cifrado de contraseñas: Devuelve boolean----------------
// UserSchema.methods.matchPass = function(password){
//     return await bcrypt.compare(password, this.password)
// }

module.exports = model('User', UserSChema)