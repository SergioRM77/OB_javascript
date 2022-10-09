//Inheritance - herencia
class Persona{
    _nombre;
    _edad;
    _isDeveloper;

    constructor(nombre, edad, isDeveloper){
        this._nombre = nombre;
        this._edad = edad;
        this._isDeveloper = isDeveloper
    }
    saludo(){
        console.log(`hola soy ${this._nombre}`);
    }

}

//una clase derivada, que extiende de otra se vale de su constructor, funciones y atributos
//es decir que tiene todo lo de su padre y además todo lo que podamos meter en la clase hija
class Desarrollador extends Persona{
    constructor( nombre, edad, isdesarrollador, lenguaje){
        super(nombre,edad, isdesarrollador);
        this.lenguaje = lenguaje;
    }

    saludo(){//Override
        super.saludo()//accedo al saludo de clase padre
        console.log(`Soy desarrollador ${this.lenguaje}, esta es una función redefinida o Polimorfismo`);
    }
}

const nuevoDev = new Desarrollador("sergio", 30, true, "PHP");
console.log(nuevoDev);//Desarrollador { nombre: 'sergio', edad: 30, isDeveloper: true, lenguaje: 'PHP' }
//nuevoDev.saludo()-> hola soy sergio/ es el método del padre

//Polimorfismo
nuevoDev.saludo()//hola soy sergio/Soy desarrollador PHP, esta es una función redefinida o Polimorfismo 
