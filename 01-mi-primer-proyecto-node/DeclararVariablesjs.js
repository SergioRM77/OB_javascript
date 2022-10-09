//3 formas de declarar variables
var variable = 3;// sirve para ambito local o global
let varlet = 6;//solo sirven en el bloque donde se declaran, como si fuera private

const constante = 0;//las constantes son fijas, no se pueden cambiar
//constante =  "adfvqdfvj"; esto dará error

console.log(variable);
variable = 8;
console.log(variable);

console.log(varlet);
varlet = 2;
console.log(varlet);
// no es buena práctica reescribir algo ya predefinido
var variable = "reescribiendo una variable ya declarada";


for (let i = 0; i < 3; i++) {
    var variable = "reescribiendo otra vez";
    
}
variable; //

var variable = "reescribiendo una variable ya declarada";

let variablelet = "1. Esto es variable let";
for (let i = 0; i < 3; i++) {
    //dentro de este bloque la variable se ha cambiado, pero fuera ya vuelve a la normalidad
    //igualmente no es buena practica usar el mismo nombre
    let variablelet = "2. reescribiendo variable let";
    
}
//no se ve afectada por el for
variablelet;

//podemos imprimir el tipo de las variables, cambiar el tipo no es recomendable
console.log(typeof "valor");//string
console.log(typeof true);//booleano
console.log(typeof hola);//undifined
console.log(typeof 4);//number
console.log(typeof null);//object
