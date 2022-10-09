//Ejercicio7.3
/**
 * Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
 */

const hoy = new Date();
const nacim = new Date(1993,0,21);

const ishoyMayor = hoy > nacim;
console.log(ishoyMayor);//true

const mes = nacim.getMonth();//mes 0
const mes2 = nacim.toLocaleString('default', { month: 'long' })//para obtener el nombre
const annio = nacim.getFullYear()
console.log(annio, mes2);//1993 'enero'