//Al crear ej JSON con npm init -y, dentro agregamos "type": "module"
// de esta manera solo necesitamos poner al principio de cada función o atributo
// un export y ya es público
export function suma(a,b){
    return a + b;
}
export function multiplica(a,b){
    return a * b;
}

export function elevado(a,b){
    return a ** b;
}

export function factorial(a){
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}
