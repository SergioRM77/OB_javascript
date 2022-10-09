/**
 * Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad 
    de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
 */

function Fibonacci(num){
    if (num <= 0 )  return []
    if (num === 1)  return [1]
    if (num === 2)  return [1,1]

    const array = [1,1]
    for (let i = 1; i < num-1; i++) {
        array.push(array[i-1] + array[i])
    
    }
    return array
}

console.log(Fibonacci(8));
