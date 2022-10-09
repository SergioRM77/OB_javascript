// .sort() -> modifica el array para ordenarlo
// siempre tiene que retornar algo
//funciona con números positivos y negativos
//positivo o 0 -> mantiene el orden
//negativo -> invierte el sentido
const array = [2,35,4,11,36,28,10];

array.sort((a,b)=>a-b);

console.log(array);//[ 2, 4, 10, 11, 28, 35, 36 ]
array.sort((a,b)=>b-a);// o -1, hace lo mismo
console.log(array);//[ 36, 35, 28, 11, 10, 4, 2 ]

//////////////
//Ordenar objetos
const listaObjetos = [
    {nombre: "Pepe", edad: 25 },
    {nombre: "Carla", edad: 26 },
    {nombre: "Maria", edad: 74},
    {nombre: "Marcos", edad: 14 },
    {nombre: "Paloma", edad: 16}
];

listaObjetos.sort((a,b) => a.edad -b.edad);
console.log(listaObjetos);
/**
 * [ { nombre: 'Marcos', edad: 14 },
 * { nombre: 'Paloma', edad: 16 },
 * { nombre: 'Pepe', edad: 25 },
 * { nombre: 'Carla', edad: 26 },
 * { nombre: 'Maria', edad: 74 } ]
 */

//Comparar listas .every()

const array2 = [4,3,5,8,7,11,66,-25,12,45];
const resultado = array2.every(valor => valor < 0);
console.log(resultado);//false

const art1 = [1,2,3,4]
const art2 = [1,2,3,4]
const art3 = [1,2,3,5]

console.log(art1 == art2);// false, las listas no se pueden comparar así

//esto es una funcion para comparar si arrays son iguales
const compararArrays = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false;
    const res = array_1.every((valor, i) => valor === array_2[i]);
    return res;
}

console.log(compararArrays(art1, art2));//true
console.log(compararArrays(art1, art3));//false