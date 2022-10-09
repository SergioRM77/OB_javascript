//Ejercicio 5
/**
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */
const listaCompra = ["Papel", "jabón", "arroz", "lentejas", "pan"];
listaCompra.push("Aceite de girasol");
console.log(listaCompra);//[ 'Papel', 'jabón', 'arroz', 'lentejas', 'pan', 'Aceite de girasol' ]
listaCompra.pop()
console.log(listaCompra);//[ 'Papel', 'jabón', 'arroz', 'lentejas', 'pan' ]
listaCompra.push("Aceite de girasol");

//para borrar un valor independientemente del lugar
//pero solo se puede guardar en otro array, no en el original
let listaCompra1 = listaCompra.filter(valor => valor !== 'arroz');
console.log(listaCompra1);//[ 'Papel', 'jabón', 'lentejas', 'pan', 'Aceite de girasol' ]

let Pelicula1 = {
    titulo : "Señor de los Anillos",
    director : "Peter Jackson",
    fecha : 2001
};
let Pelicula2 = {
    titulo : "Superman vs Batman",
    director : "Zack Snyder",
    fecha : 2016
};
let Pelicula3 = {
    titulo : "Logan",
    director : "James Mangold",
    fecha : 2017
};

let listaPeliculas = [Pelicula1,Pelicula2,Pelicula3];

let pelisdesde2010 = listaPeliculas.filter(peli => peli.fecha > 2010);
console.log(pelisdesde2010);// las 2 últimas

let listaDirectores = listaPeliculas.map(peli => peli.director);
console.log(listaDirectores);//[ 'Peter Jackson', 'Zack Snyder', 'James Mangold' ]

let listaTitulos = listaPeliculas.map(peli => peli.titulo);
console.log(listaTitulos);//[ 'Señor de los Anillos', 'Superman vs Batman', 'Logan' ]

let listaConcat =[];
listaPeliculas.forEach(peli => {listaConcat.push(peli.director.concat(" ", peli.titulo))});
console.log(listaConcat);
/**
 * [ 'Peter Jackson Señor de los Anillos ',
 * 'Zack Snyder Superman vs Batman ',
 * 'James Mangold Logan ' ]
 */

const directores = listaPeliculas.map(pelicula => {return pelicula.director});
console.log(directores);//[ 'Peter Jackson', 'Zack Snyder', 'James Mangold' ]

const titulos = listaPeliculas.map(pelicula => { return pelicula.titulo});
console.log(titulos);//[ 'Señor de los Anillos', 'Superman vs Batman', 'Logan' ]

let listaFactorPropagacion = [...titulos, ...directores];
console.log(listaFactorPropagacion);
/**
  * [ 'Señor de los Anillos',
  * 'Superman vs Batman',
  * 'Logan',
  * 'Peter Jackson',
  * 'Zack Snyder',
  * 'James Mangold' ]
  */