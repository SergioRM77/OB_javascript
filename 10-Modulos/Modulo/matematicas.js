function suma(a,b){
    return a + b;
}
function multiplica(a,b){
    return a * b;
}

function elevado(a,b){
    return a ** b;
}

function factorial(a){
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

//para poder usar estas funciones tenemos que decirle que van a exportarte,
//de lo contrario serían funciones internas
module.exports = {
    //esta es la forma de hacer esas funciones públicas
    suma,
    multiplica,
    elevado,
    factorial
}