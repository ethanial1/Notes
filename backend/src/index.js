require('dotenv').config(); // importamos las variables de entorno

const app = require('./app');
require('./database');

// iniciamos el servidor
async function main() {
    await app.listen(4000);
    console.log("Servidor activo");
}

main();