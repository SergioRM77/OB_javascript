//Principales operaciones aritmeticas
let a = 3.7
let b = 4.6
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

//Representaciones de los números en cadenas de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
console.log(d); // 9.899999999999999
//.tofixed('Numero de decimales') esto redondea desde el 5 sube y 4 baja -> devuelve string
console.log(d.toFixed(3));//9.900
let e = 1.46152839;
console.log(e.toFixed(3));//1.462
console.log(typeof e.toFixed());// esto devuelve un string

//.toPrecision(x) -- esto redondea las cifras significativas tanto los enteros como los decimales
console.log(e.toPrecision(6));//1.46153
console.log(typeof e.toPrecision(6));//string