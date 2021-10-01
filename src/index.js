require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('./database.js');
const app = express();


//TODO----------------Settings----------------------
//-----------Se obtiene el puerto o por defecto se usa el 4000------------
app.set('port', process.env.PORT || 4000);
//--------------Recibir el puerto de conexión a la BD----------------
app.listen(app.get('port'), console.log('Server on port', app.get('port')))


//TODO--------------Middlewares------------------------
//------------Para que las rutas detecten el formato json-----------
app.use(express.json());
//-----------Para info en consola sobre peticiones-----------
app.use(morgan('dev'));
//-------Urlencoded: Para validar distintos tipos de formularios--------------
app.use(express.urlencoded({extended:false}));


//TODO----------------Routes--------------------------
app.use('/', require('./routes/user.routes'));

module.exports = app;
