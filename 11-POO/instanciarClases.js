//crear objetos de Clase Persona
class Persona{
    nombre;
    edad;
    isDeveloper;

    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper
    }
    saludo(){
        console.log(`hola soy ${this.nombre}`);
    }

}

const nueva_persona = new Persona("Sergio", 29, true);
console.log(nueva_persona);//Persona { nombre: 'Sergio', edad: 29, isDeveloper: true }
nueva_persona.saludo();

let num = 30;// esto es inicializar
let persona2 =new Persona("Lola", 20, false);//esto es instanciar una clase

console.log(typeof persona2);//object
console.log(persona2 instanceof Persona);//true

