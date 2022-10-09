class Persona{
    //Private -> #
    #nombre
    #edad
    

    //Protected -> _
    _isDeveloper = false;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;

    }
    saludo(){
        console.log(`hola soy ${this.#nombre} y tengo ${this.#getEdad()} años`);
    }

    getNombre(){
        return this.#nombre;
    }

    #getEdad(){
        return this.#edad;
    }
    getEdadPublica(){
        return this.#edad;
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }

}

const persona = new Persona("Pepe", 40);
console.log(persona);//Persona { _isDeveloper: false }
console.log(persona.nombre);//undefined -> no podemos llamar a un atributo o método privado
console.log(persona.getNombre());//Pepe
persona.saludo()//hola soy Pepe
//persona.#getEdad()//no podemos acceder a métodos privados
console.log(persona._isDeveloper);//solo se puede acceder a atributo o método protegido si es desde objeto Persona o descendiente

//Getter -> métodos públicos que nos permiten obtener variables públicas, privadas o protegidas
console.log(persona.getNombre());//Pepe
persona.saludo()//dentro de esta funcíon pública se accede a una función privada

//Setter -> métodos públicos que nos permiten cambiar variables públicas, privadas o protegidas
console.log(persona.getEdadPublica());
persona.setEdad(21);
console.log(persona.getEdadPublica());