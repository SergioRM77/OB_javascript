// Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);

console.log(lista);// [1, "hola", true, undefined, null]
console.log(lista2);// [2, "hola", true, undefined, null]
console.log(lista3);// [ , , ] se define el espacio, aunque es una constante se puede meter cosas despues
lista3[0] = "un string";
console.log(lista3);// ["un string", , ]


// Objetos
/*cuando definimos un objeto como constante este es una caja,
  podemos modificar lo interno pero no se puede redefinir el tipo,
  ejem: si es array no puede convertirse en string después.
 */
const movil = {
    alto : 10,
    ancho : 5,
    marca : "xaomi",
    isWhite : true,
    contactos : ["papa", "Álvaro", "María"],
    tarjeta : {
        marca : "Sandisk",
        almacenamiento : 32 
    }
}

console.log(movil.tarjeta);//{ marca : "Sandisk", almacenamiento : 32}
//posteriormente se puede meter atributos o modificarlos
movil.annio = 2020;
movil.tarjeta.almacenamiento = 64;
console.log(movil);
    /*
    {
        alto : 10,
        ancho : 5,
        marca : "xaomi",
        isWhite : true,
        contactos : ["papa", "Álvaro", "María"],
        tarjeta : {
            marca : "Sandisk",
            almacenamiento : 64
        },
        annio = 2020
    }

    --> si por algún motivo quisieramos un nombre encadenado como (altura-tarjeta) esto tal cual no es válido
    pero si se puede "altura-tarjeta" : 4 (no es un string, sino un nombre de atributo encapsulado)
    */


// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date(); //fecha al momento
console.log(ahora);

const fecha_milisegundos = new Date(10);
console.log(fecha_milisegundos); // esto da fecha en milisegundos desde enero 1970

const fecha_cadena = new Date("march 25 2020");// no se suele usar mucho esta forma
console.log(fecha_cadena);//Wed Mar 25 2020 00:00:00 GMT+0100

const fecha_valores = new Date(2022, 2, 15);// los meses empiezan en 0 (enero)
console.log(fecha_valores);// Tue Mar 15 2022 00:00:00 GMT+0100

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; // podemos sumar ya que nos da un tipo número
const annio = ahora.getFullYear();

console.log(dia, mes, annio);
