//Ejercicio7.2
/**
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

const datosPersonales = {
    nombre: "sergio",
    apellido: "Romero",
    edad: 29,
    altura: 1.90,
    isDesarrollador: true
}

let edad = datosPersonales.edad;
console.log(edad);//29

const datosAmigo1 = {
    nombre: "Sebas",
    apellido: "Pedrosa",
    edad: 26,
    altura: 1.85,
    isDesarrollador: true
}

const datosAmigo2 = {
    nombre: "Susu",
    apellido: "Gonzalez",
    edad: 30,
    altura: 1.84,
    isDesarrollador: false
}

const array = [datosAmigo1,datosAmigo2,datosPersonales];
console.log(array);//Sebas, Susu, Sergio

array.sort((a,b)=> b.edad - a.edad);
console.log(array);//Susu. Sergio, Sebas