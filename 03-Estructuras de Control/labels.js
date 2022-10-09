//labels

let unidades = 0;
let decenas = 0;
/**
 * el siguiente modo es el normal
 */

while (true) {
    while (true) {
        console.log(`El número actual es: ${decenas}.${unidades}`);
        unidades++;
        if(unidades === 10){
            unidades = 0;
            break;
        }
    }

    decenas++;
        if (decenas === 2) {
            console.log(`El número actual es: ${decenas}.${unidades}`);
            break;
        }
}
/**
 * usando los labels, podemos ponerle etiquetas a los bucles de tal manera
 * que podríamos ponerlos todos seguidos que cada uno solo afecta al señalado
 * nos ahorramos líneas de código, pero no quiere decir que sean las mejores prácticas
 */
console.log();
unidades = 0;
decenas = 0;
bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}.${unidades}`);
        unidades++;
        if(unidades === 10){
            unidades = 0;
            break bucleUnidades;
        }
        if (decenas === 2) {
            break bucleDecenas;
        }
    }

    decenas++;
        
}