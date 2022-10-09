const winston = require('winston');

const logger = winston.createLogger({
    //los niveles aparecen en la página, podemos modificarlo, por defecto solo hasta info
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),//este es opcional, nos muestra todo por terminal

    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
module.exports = logger;