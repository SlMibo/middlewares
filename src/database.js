const { connect } = require('mongoose');

connect(process.env.MONGODB_URI)
    .then(db => console.log('La base está conectada'))
    .catch(err => console.log(err))