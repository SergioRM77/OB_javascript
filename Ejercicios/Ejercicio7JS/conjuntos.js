//Ejercicio7.1
/**
 * Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" 
 */
const familia = new Set(["Joaquin", "Dolores", "Kuky", "Sergio"]);
console.log(familia);//Set { 'Joaquin', 'Dolores', 'Kuky', 'Sergio' }

familia.add("Sergio");
console.log(familia);//Set { 'Joaquin', 'Dolores', 'Kuky', 'Sergio' }

familia.add("JavaScript");
console.log(familia);//Set { 'Joaquin', 'Dolores', 'Kuky', 'Sergio', 'JavaScript' }