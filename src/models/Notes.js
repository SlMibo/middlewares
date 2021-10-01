//-------------El esquema define qué guardo en la BD,----------------
//---a partir del Schema, model permite tener métodos y propiedades----
//----------Ambos permiten definir un modelo de datos--------------
const {Schema, model} = require('mongoose');

//------------------Esquema en BD-----------------
const NoteSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Boolean
    }
}, {
    //-----------------Fechas de creación y actualización-------------
    timestamps: true
});

module.exports = model('Note', NoteSchema);