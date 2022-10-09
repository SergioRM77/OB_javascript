//Funciones tipo flecha - funciones anónimas
//las funciones son recomendables declararlas siempre arriba del todo
//porque en ocasiones nos puede dar un error de acceso antes de declararlo

const array = [1,4,2,77,3,55,8];

/**
 * esto es válido pero es mejor usar las tipo flecha
 * const array2 = array.map(function(valor){
    return valor * 2;
})
 */

//lo más eficiente, se llama función anónima, ya que no le damos nombre
//se ejecuta sobre la marcha
const array2 = array.map(valor => valor * 2)
console.log(array);//[ 1, 4, 2, 77, 3, 55, 8 ]
console.log(array2);//[ 2, 8, 4, 154, 6, 110, 16 ]

//console.log(dobleDelValor(5)); ERROR - no se puede acceder antes de declarar la función
const  dobleDelValor = valor => valor * 2;
console.log(dobleDelValor(5));//10 esto si funciona
