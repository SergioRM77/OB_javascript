//Trabajar con métodos avanzados
//.map() .filter() .reduce()

const array = ["Málaga", "Lora", "Murcia", "Barcelona", "Madrid"];
const dev = array.forEach(i => {
    console.log(i);// Málaga Lora Murcia Barcelona Madrid
    return 4;
})
console.log(dev);// undefined 

//Lo anterior no nos guarda nada en la variable
//para ello usamos .map(valor, indice)
const newArray = array.map((valor, indice) => `${indice + 1} es ${valor}`);

console.log(newArray);
/**
 * [ '1 es Málaga',
 * '2 es Lora',
 * '3 es Murcia',
 * '4 es Barcelona',
 * '5 es Madrid' ]
 */


const listaObjetos = [
    {nombre: "Pepe", edad: 25 },
    {nombre: "Carla", edad: 26 },
    {nombre: "Maria", edad: 74},
    {nombre: "Marcos", edad: 14 },
    {nombre: "Paloma", edad: 16}
];
const personasMayores = listaObjetos.filter(obj => {
    if(obj.edad >20){
        return true;
    }else{
        return false;
    }
});

console.log(personasMayores);
/**
 * [ { nombre: 'Pepe', edad: 25 },
 * { nombre: 'Carla', edad: 26 },
 * { nombre: 'Maria', edad: 74 } ]
 */

//Mejor y eficiente y se pueden encadenar con && y ||
const personasMayores2 = listaObjetos.filter(obj => obj.edad > 20 && obj.nombre !== "Maria");

console.log(personasMayores2);
/**
 * [ { nombre: 'Pepe', edad: 25 },
 * { nombre: 'Carla', edad: 26 }]
 */

//reduce() nos reduce los valores a optener por ejemplo para sumar
const valoresArray = [25,44,11,23,50];
const suma = valoresArray.reduce((acumulado, valor, indice, arrayOriginal) => {
    console.log(acumulado);//25, 69, 80, 103
    console.log(valor);//25,44,11,23,50
    console.log(indice);//0,1,2,3,4
    console.log(arrayOriginal);//[25,44,11,23,50] * 4
    return acumulado + valor;
})
console.log(suma);//153

const suma2 = valoresArray.reduce((acu, valor, i, array) => acu + valor);
console.log(suma2);//153