const persona = {
    nombre : "Sergio",
    edad: 29,
isDeveloper: true,
saludo: () => console.log("Holaa")
}

persona.saludo()
//crear otra persona a mano es tedioso sobretodo porque se repite mucho código
//en saludo es constante, si tenemos muchos y queremos cambiar el mensaje 
const otra_persona = {
    nombre : "Pepe",
    edad: 40,
isDeveloper: false,
saludo: () => console.log("Holaa")
}

//función factory
const crearPersona = (nombre, edad, isDeveloper) => {
    return {
        //en javascript la obviedad se puede omitir
        nombre,// es igual a nombre : nombre,
        edad,// es igual a edad: edad,
        isDeveloper,// es igual a isDeveloper: isDeveloper,
        saludo: () => console.log("Holaa")
    }
}

const nuevaPersona = crearPersona("Lola", 22, true);
console.log(nuevaPersona);