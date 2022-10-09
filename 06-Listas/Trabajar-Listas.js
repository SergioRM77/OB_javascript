//Cómo trabahar con listas, arrays, vectores...
let array1 = new Array(5);
let array2 = [1,2,3,4,5];
let val1 = {id: "cosas123"};
let array3 = [1, "hola", 12.25, 'Object coche', val1, undefined, null];

console.log(array3);//[ 1,'hola',12.25,'Object coche',{ id: 'cosas123' },undefined,null ]

//Acceder a array por posición
console.log(array3[3]);//Object coche

//Métodos para meter valores en array
//.push() .unshift() -> mutan el valor del array
/**
 * .push() ->los arrays pueden tener todo tipo de datos y en cantidad,
 * push cambia el valor del array, añadiendo al final,
 * en React cuando trabajamos con el estado no nos combiene 
 * cambiar el valor de los arrays
 * */
array2.push("Añadir al final");
console.log(array2);//[1,2,3,4,5, "Añadir al final"]

/**
 * .unshift()-> añade valores al principio
 * 
 */
array2.unshift("Añadir al principio");
console.log(array2);//["Añadir al principio", 1,2,3,4,5, "Añadir al final"]

//Métodos para eleminar valores de array
//.pop() . shift()-> mutan el valor del array

array4 = [ 1,2,"hola", false];

//.pop()-> elimina valores del final
array4.pop();
console.log(array4);//[ 1,2,"hola"]

//.shift() -> eliminan valores del principio
array4.shift();
console.log(array4);//[ 2, 'hola' ]

//métodos para eliminar, modificar o añadir valores en nuestro array
// .splice(numero_start, numero_elementos_a_borrar[si no se especifica borra todos hasta final])

let array5 = [1,2,3,4,5];
console.log(array5);
array5.splice(2,2);
console.log(array5);//[ 1, 2, 5 ]

//Añadir con .splice(indice, 0, valor, valor...)
array5.splice(2,0, "hola", false);
console.log(array5);//[ 1, 2,"hola", false, 5 ]

//Modificar valores splice(indice, 1, valor 'añadir más')
array5.splice(2,1,"adios");
console.log(array5);//[ 1, 2,"adios", false, 5 ]
