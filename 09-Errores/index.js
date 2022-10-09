//Para crear un log usamos npm init (-y, para que lo cree por defecto)
//usamos npm start para ejecutar el programa configurado en el JSON


//una libreria para gestionar todos los logs es npm winston, en la 
//carpeta donde se desea guardar esos log escribimos en terminal "npm install winston"

//De la página copiamos para su uso lo siguiente
//https://www.npmjs.com/package/winston

const logger = require("./logger");

//logger -> nos permite tener un control de todos los logs que vayan apareciendo
//Esto nos crea dos archivos, combined.log y error.log, es un registro donde se guarda
//todos los logger que se ejecuten

//logger.log("Estoy saliendo por pantalla");
logger.info("Mensaje informativo");
logger.debug("Mensaje de debug");
logger.warn("mensaje de advertencia");
logger.error("mensaje de error");