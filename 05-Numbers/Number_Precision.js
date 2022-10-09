//Numbers y precisión
//Enteros
let a = 3;
console.log(a);

//coma flotante
let b = 0.1;
console.log(b);

//Precisión

let c = 0.2;

console.log(b+c);//0.30000000000000004
console.log(b*c);//0.020000000000000004
/**
 * En JavaScript, todos los números son números de punto flotante IEEE 754.
 * Debido a la naturaleza binaria de su codificación, algunos números decimales
 * no se pueden representar con una precisión perfecta. 
 *
 * El formato tiene una limitación de 64 bits, por lo que cuando se alcanza el límite 
 * de almacenamiento del número, debe redondear el último dígito hacia arriba o hacia abajo.
 * El primer pensamiento podría ser intentar redondear al segundo decimal. Desafortunadamente,
 * el redondeo interno de JavaScript solo funciona para el entero más cercano
 */

//truco para redondear
console.log(Math.round((b+c) * 100) / 100);//0.3