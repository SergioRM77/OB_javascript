//Sets o conjuntos
/**
 * El objeto Set le permite almacenar valores únicos de cualquier tipo, 
 * ya sea valores primitivos o referencias a objetos.
 * Los objetos Set son colecciones de valores. Puede iterar a través de los elementos de un conjunto 
 * en orden de inserción. Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set.
 */

const array = [1,3,2,4,5,6,6,4,1, {id:2},{id:2}];
const miSet = new Set(array);

console.log(array);//[ 1, 3, 2, 4, 5, 6, 6, 4, 1, { id: 2 }, { id: 2 } ]

//set no admite valores repetidos, pero objetos con la misma composición si,
//siempre y cuando tengan diferente referencia
console.log(miSet);//Set { 1, 3, 2, 4, 5, 6, { id: 2 }, { id: 2 } }

//.add()
miSet.add(9);
miSet.add(9);
console.log(miSet);//Set { 1, 3, 2, 4, 5, 6, { id: 2 }, { id: 2 }, 9 }

//.delete()
miSet.delete(4);
miSet.delete(4);
console.log(miSet);//Set { 1, 3, 2, 5, 6, { id: 2 }, { id: 2 }, 9 }

//.clear() para limpiar o vaciar el set
//miSet.clear();
//console.log(miSet);// Set { }

//.has() para saber si contiene un valor, como array.includes()
console.log(array.includes(4));//true
console.log(miSet.has(1));//true
console.log(miSet.has(100));//false

//.size() para saber el tamaño, de datos no duplicados
console.log(miSet.size);//8

//iteración igual que en array
miSet.forEach(valor => {
    console.log(valor);//1, 3, 2, 5, 6, { id: 2 }, { id: 2 }, 9
});

//objeto iterator
const it_miSet = miSet.values();
console.log(it_miSet);//{ [Iterator] }

//convertir set een array con factor de propagación
const ar_miSet = [...miSet];
console.log(ar_miSet);//[ 1, 3, 2, 5, 6, { id: 2 }, { id: 2 }, 9 ]