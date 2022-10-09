//.some() comprobar si existe un valor en lista
const array = [1,2,3,44,5,7554,21];

const res = array.some(valor => valor > 0);
const res2 = array.some(valor => valor == 10);

console.log(res);//true
console.log(res2);//false

const listaObjetos = [
    {nombre: "Pepe", edad: 25 },
    {nombre: "Carla", edad: 26 },
    {nombre: "Maria", edad: 74},
    {nombre: "Marcos", edad: 14 },
    {nombre: "Paloma", edad: 16}
];

const existNombre = listaObjetos.some(persona => persona.nombre == "Paloma");
console.log(existNombre);//true

const existEdad = listaObjetos.some(persona => persona.edad == 1104);
console.log(existEdad);//false

//Cómo obtener una lista a partir de un obeto iterable
const atr = "Hola a todos";
console.log(atr[7]);// t
//Array.from() -> castear valores para convertirlo en un array
const atr_to_array = Array.from(atr);
console.log(atr_to_array);//[ 'H', 'o', 'l', 'a', ' ', 'a', ' ', 't', 'o', 'd', 'o', 's' ]

// Set() -> colección de valores, para iterar sobre ellos, no admite valores repetidos / no muy usado
const set1 = new Set();
set1.add(1)
set1.add(2)
set1.add("hola")
set1.add(1)

console.log(set1);//Set { 1, 2, 'hola' }

const set1_to_array = Array.from(set1);
console.log(set1_to_array);//[ 1, 2, 'hola' ]

// Keys() -> objeto iterable, número de iteraciones / no muy usado
const keys = array.keys();
console.log(keys);// [Iterator] }

const array_iter = Array.from(keys);
console.log(array_iter);//[ 0, 1, 2, 3, 4, 5, 6 ]
