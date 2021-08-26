// codigo del framework
const express = require('express');
const cors = require('cors');

const app = express(); // servidor

// SETTING
app.set('port', process.env.PORT || process.env.MONGODB_PORT);

// MIDDLEWARES
// cors: permite que dos servidoes intercambien datos entre ellos
app.use(cors());
app.use(express.json());


// ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;