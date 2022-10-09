//Funciones generadoras
//ejemplo de generador de id incremental

/**
 *  Los generadores son funciones de las que se puede salir y volver a entrar. 
 * Su contexto (asociación de variables) será conservado entre las reentradas.
 * 
 * La llamada a una función generadora no ejecuta su cuerpo inmediatamente; 
 * se devuelve un objeto iterador para la función en su lugar. Cuando el metodo next()
 * del iterador es llamado , el cuerpo de la función generadora es ejecutado hasta 
 * la primera expresión yield, la cual especifica el valor que será retornado por el iterador 
 * o con, yield*, delega a otra función generadora. 
 * El método next() retorna un objeto con una propiedad value que contiene el valor 
 * bajo el operador yield y una propiedad done que indica, con un booleano, 
 * si la función generadora ha hecho yield al último valor.
 */
function* generaid(){
    let id = 0;
    while(true){
        id++;
        
        if (id>3){
            return id;
        }
        yield id//esperando hasta que se vuelva a llamar con .next(), reanuda desde esta posición
                //al estar dentro del while se repite el proceso
    }
}
/**
 * yield-> La palabra clave yield detiene la ejecución de la función del generador 
 * y el valor de la expresión que sigue a la palabra clave yield se devuelve 
 * al llamador del generador. Es como un return para funciones generadoras.
 */

const gen = generaid();

console.log(gen.next());//{ value: 1, done: false }
console.log(gen.next());//{ value: 2, done: false }
console.log(gen.next().value);//3
console.log(gen.next());//{ value: 4, done: true }
console.log(gen.next().value);//undefined

