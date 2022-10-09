//este es el archivo a comprobar eslint
//dentro de ESLint seguimos los pasos para instalar el estandar guiado sobre
//reglas a seguir, como: comillas siples o dobles, ; al final si o no...

//"no-unused-vars": "off" para evitar problema, es un override
const nombre = "Pepe";

//let nombre2 = 'Maria';//error de comillas simple

//var nombre3 = "Lucas"//falta ;

//desactivar las restricciones de eslint

/* eslint-disable */
const nombre1 = 'Pepe'
//aqui todo esta permitido

/* eslint-enable */
//const nombre2 = 'Pepe' // aqui ya se queja el eslint
const nombre3 = "Pepe";

//para deshabilitar solo una línea
const nombre4 = "Pepe" //eslint-disable-line

//deshabilitar el indentado en una línea
/* eslint-disable-next-line indent */
  const num = 3;

// todas las posibilidades de configuración en: https://www.npmjs.com/search?q=eslint-config
console.log("Hola");
console.log("Hola");
console.log("Hola");

/**
 * Para corregir los problemas añadimos al json lo siguiente
 *  "scripts": {
        "lint": "eslint .",
        "lint-fix": "eslint --fix ."
    }

    luego para ver errores en terminal> npm run lint
    luego para corregir errores en terminal> npm run lint-fix
 */