//Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "sergio",
    apellido: "RM",
    isDeveloper: true,
    libro_favorito: "el secreto",
    "-4- juegos" : [1,2,3,4]
}

console.log(obj.apellido);//RM
console.log(obj["-4- juegos"]);//[1,2,3,4]

const prop = "isDeveloper";
console.log(obj[prop]);//true

//en objetos, lo que se hace a continuación es asignarle otro nombre en dirección
//de memoria, es decir que ese objeto tiene 2 nombres a los que se le puede llamar
//no duplica el objeto (en datos primitivos si)
const obj2 = obj;

console.log(obj2.nombre);//sergio
obj2.nombre = "alberto"
console.log(obj2.nombre);//alberto
console.log(obj.nombre);//alberto
//no se ha creado otro objeto sino que a un mismo objeto se accede desde diferentes referencias

///////////
//para copiar los datos en un nuevo objeto se puede usar el método de propagación
//que lo hace independiente al original, esto es importante porque muchos fallos
//se deben a estas cosas

const obj3 = {...obj}
console.log(obj.nombre);//alberto
console.log(obj3.nombre);//alberto

obj3.nombre ="María";

console.log(obj.nombre);//alberto
console.log(obj3.nombre);//María

//////////
//Cómo ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    
    {titulo: "Titanic", anyo:1997 },
    {titulo: "Moana", anyo:2016 },
    {titulo: "Efecto mariposas", anyo:2004 },
    {titulo: "TED", anyo:2012 },
    {titulo: "Lo que el viento se llevó", anyo: 1939 }
];

console.log(listaPeliculas);
//.sort()-> muta el valor original

listaPeliculas.sort((a,b) => a.anyo - b.anyo);
console.log(listaPeliculas);

