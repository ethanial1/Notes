// para conectarnos a la base de datos usamos mongoose
const mongoose = require('mongoose');

// usando process accedemos a las variables
const uri = process.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err)); //nos conectamos a mongodb

const connection = mongoose.connection;

connection.once('open', () => console.log("Conectado."));