require('dotenv').config(); // importamos las variables de entorno

const app = require('./app');
require('./database');

// iniciamos el servidor
async function main() {
    await app.listen(app.get('port'));
    console.log("Servidor activo en el puerto: ", app.get('port'));
}

main();