/**Ejercicio 9
 * Crea un nuevo proyecto de Node
- Instala la dependencia Winston
- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch
 */

//1. terminal> npm install winston

//2. https://www.npmjs.com/package/winston
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function mensajeError(){
    logger.error("Mensaje personalizado error de logger con winston")
}

try {
    mensajeError();
} catch (e) {
    throw new Error(("No se ha podido crear mensaje, error: " + e));
}
