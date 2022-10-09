//colocamos los breakpoint, seleccionamos Ejecutar y depurar, Node.js
//así vemos los valores en cada momento y cada proceso.
const persona = {
    nombre : "Sergio",
    edad : 30
}
console.log(persona);
function obtenDobleEdad(edad){
    return 2 * edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);

console.log(dobleEdad);