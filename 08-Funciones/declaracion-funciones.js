//Qué son funciones, cómo se declaran y cómo se utilizan
saludar("Sergio");//hola Sergio Adios Sergio
despedir("Sergio");//Adios Sergio

function saludar(nombre) {
    console.log("hola " + nombre);
    despedir(nombre)
}

function despedir(nombre){
    console.log(`Adios ${nombre}`);
}

let persona = {nombre: "Pepe", apellido: "Palomo"}

function saludarPersona(objeto){
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludarPersona(persona)//Hola Pepe Palomo

//////////
//si no se encuentra una variable nos da undefined
//podemos hacer que tenga un valor por defecto


function imprimeNumero(num = 4){
    console.log(num);
}

imprimeNumero(7)//7
imprimeNumero()//4

function imprimir(...param){
    console.log(param);
}

imprimir(1,4,7,22,4,"hola")//[ 1, 4, 7, 22, 4, 'hola' ]

//operaciones

function suma(...num){
    return (num.reduce((a,b) => a+b));
}
let a = suma(1,3,55,4,28)

console.log(a);//91

function multiplicar(a = 0, b = 0){
    return a * b;
}

console.log(multiplicar(4,6));//24