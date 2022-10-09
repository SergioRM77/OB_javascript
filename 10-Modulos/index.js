//Antes de 2015, solo habia una manera de importar y exportar módulos
//1. CommonJS - require
//Despues tenemos tambien esta forma
//2. Import ES6 - import

const moduloMatematicas = require("./Modulo/matematicas");
const suma = moduloMatematicas.suma;

//esto es mucho más limpio y eficiente, sobretodo si tenemos muchas funciones
const {multiplica, elevado} = require("./Modulo/matematicas");
//console.log(moduloMatematicas);

const fact = moduloMatematicas.factorial(5);
console.log(fact);

const sum = suma(12,87);
console.log(sum);

const mult = multiplica(12,4);
console.log(mult);

const eleva = elevado(5,4);
console.log(eleva);