// Operador .valueof() - Optener valores numericos a partir de literales
let a = 2;
let b = new Number(3);// esto no se suele usar a no ser quesea un caso muy especifico

console.log(a);
console.log(b);//Number 3 {}
console.log(b.valueOf());//3
console.log(a+b);//5

let str = new String("Soy un String");
console.log(str);//{ 0: 'S',1: 'o',2: 'y',3: ' ',4: 'u',5: 'n',6: ' ',7: 'S',8: 't',9: 'r',10: 'i',11: 'n',12: 'g' }
console.log(str.valueOf());//Soy un String

// NaN(Not a Number) - Infinity
let n = Number('hola');
console.log(n);//NaN
console.log(isNaN(n));//true

let numerador = 19;
let divisor = 0;
let divisor2 = null;

console.log(numerador/divisor);//Infinity -> cuando un divisor es muy muy pequeño, null o 0, tiende a infinito
console.log(numerador/divisor2);//Infinity 

// cómo pasar de string a Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 10.2;

console.log(num2+numero);//10.25.89 Error, porque concatena los valores a string
console.log(Number(numero) + num2); //16.09

console.log(parseInt(numero));//5

console.log(parseFloat(numero));//5.89

// Números hexadecimales(base 16)
let numHex = '0x3a5b7';
console.log(parseInt(01100011));//294921
console.log(parseInt(01100011,16));//2705697
console.log(parseInt(numHex));//239031
console.log(parseInt(numHex, 16));//239031

// Valores máximos y mínimos en JavaScript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

//valor mínimo de trabajo
console.log(min_precision);//2.220446049250313e-16 => 0.000000000000000222....
console.log(min_valor_JS);//5e-323 --> valor mas pequeño que se puede obtener
console.log(max_valor_JS);//1.7976931348623157e+308
