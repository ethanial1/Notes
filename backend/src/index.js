const app = require('./app');

// iniciamos el servidor
async function main() {
    await app.listen(4000);
    console.log("Servidor activo");
}

