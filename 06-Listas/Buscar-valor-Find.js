//Iterar los valores de lista
const arrayNums = [1,25,44,27,198,36];

//Forma antigua (poco eficiente)
for (let i = 0; i < arrayNums.length; i++) {
    console.log(arrayNums[i]);
    
}

//Forma ES6 (más eficiente)
let suma = 0;
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
});
console.log(suma);//331

//Encontrar un valor dentro de lista .find()
//encontrar 27
const variable = arrayNums.find(valor => {
    if(valor === 27) return true;
})
console.log(variable);//27

//esto es más útil en objetos
const listaObjetos = [
    {nombre: "Pepe", edad: 25 },
    {nombre: "Carla", edad: 26 },
    {nombre: "Maria", edad: 74},
    {nombre: "Marcos", edad: 14 },
    {nombre: "Paloma", edad: 16}
];

//válido pero no muy eficiente
const objeto = listaObjetos.find(o => {
    if (o.nombre === "Marcos") return true
})

console.log(objeto.edad);//14

//Mas simplificado y eficiente
const objeto2 = listaObjetos.find(o => {
    return o.nombre === "Marcos"
})

console.log(objeto2.edad);//14

//Más simplificado y Más eficiente
const objeto3 = listaObjetos.find(o => o.nombre === "Paloma")

console.log(objeto3.edad);

//En base a lo anterior podemos guardar solo el valor deseado 
//como si fuera un objeto independiete, pero si ponemos el índice
//se convierte en una sola variable
const  {edad} = listaObjetos.find(o => o.nombre === "Paloma")

console.log(typeof edad);
console.log(edad);