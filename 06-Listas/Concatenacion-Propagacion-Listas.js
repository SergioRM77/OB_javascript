//Cómo unir dos listas lista1.concat(lista2)
const lista1 = [1,2,false,null];
const lista2 = ["hola",5];

//esto solo imprime pero no lo modifica en memoria
console.log(lista1.concat(lista2)); //[ 1, 2, false, null, 'hola', 5 ]
console.log(lista1);//[ 1, 2, false, null ]

const lista3 = lista1.concat(lista2);
console.log(lista3); //[ 1, 2, false, null, 'hola', 5 ]

//Cómo unir dos listas con el factor de propagación
/**
 * La sintaxis extendida o spread syntax permite a un elemento iterable 
 * tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos
 * (para llamadas de  función) o elementos (para Array literales) son esperados,
 * o a un objeto ser expandido en lugares donde cero o más pares de valores clave 
 * (para literales Tipo Objeto) son esperados.
 */
console.log(...lista3);//1 2 false null 'hola' 5

// ERROR!! no confundir el factor de propagación
const lista4 = [lista1,lista2];
//esto hace que sea un array de arrays con los valores encapsulados por separado
console.log(lista4);//[ [ 1, 2, false, null ], [ 'hola', 5 ] ]

//Así es la forma correcta y muy importante aprender
const lista5 = [...lista1,...lista2];
console.log(lista5);//[ 1, 2, false, null, 'hola', 5 ]
