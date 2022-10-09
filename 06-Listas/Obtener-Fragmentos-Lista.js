//Cómo obtener una lista, o fragmento, a partir de otra 
//.slice(valor_inicio, valor_final("no incluido"))
const array = ["hola", 1,2,3, true, null, "adios"];

//NO MODIFICA EL VALOR DE ARRAY ORIGINAL
console.log(array.slice(1,5));//[ 1, 2, 3, true ]
console.log(array.slice(1));//[ 1, 2, 3, true, "adios" ]

const array2  = array.slice(1,3);//coge desde posicion 1 a 2, 3 excluido
console.log(array2);//[1,2]

//también podemos contar hacia atrás con números negativos (cuenta desde el final, -1, -2...)
//es mejor ser ordenado y usar la primera
console.log(array.slice(2,-2));//[ 2, 3, true ] (el valor final no se incluye "null")
