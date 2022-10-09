//Trabajar fechas
const fecha = new Date();

console.log(fecha);//fecha al momento

//el año y mes es obligatorio, el dia no
//los meses empiezan por 0 y diciembre es 11
//existe desbordamiento de datos, si sobrepasamos se suma a la siguiente
const fecha2 = new Date(1011,11,13,20,55,111);
console.log(fecha2);//Fri Dec 13 1011 20:56:51 GMT-0014 

//restar en milisegundos a la fecha inicio
const fecha3 = new Date(-1111111111);
console.log(fecha3);//Fri Dec 19 1969 04:21:28 GMT+0100

//de String a fecha
const fecha4 = new Date("october, 15, 2011");
console.log(fecha4);//Sat Oct 15 2011 


//comparar fechas

console.log(fecha < fecha4);//false

const fecha5 = new Date(1011,11,13,20,55,111);
console.log( fecha2 == fecha5);//false-> ERROR las fechas no se comparan así


//para comparar fechas se deben pasar a milisegundos
console.log(fecha2.getTime() === fecha5.getTime());//true -> esta es la forma correcta

/////obtener el dia, mes o año de una fecha
//obtener el dia .getDate()
console.log(fecha2.getDate());//13

//obtener el mes .getMonth()
console.log(fecha2.getMonth());//11

//obtener el año .getFullYear()
console.log(fecha2.getFullYear());

//para ver en string la fecha .toLocalDateString()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString());//13/12/1011

