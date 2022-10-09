//Métodos usados con cadenas de caracteres
let str = "soy un string";
console.log(str.length);

//Obtener partes de cadenas de caracteres
//slice(), substring(), substr()-> este ya esta deprecated, pero se puede usar
let slice_str = str.slice(0,6);
console.log(slice_str);//soy un

let substring_str = str.substring(4,10);
console.log(substring_str);//un str

let substr_str = str.substr(4,10);
//-> esto lo que hace es desde la posición 4 dame los 10 caracteres siguientes
//es mejor no usarlo
console.log(substr_str);//un string 

//Reemplazar cadenas de texto
let cadena = "Hola, vamos a reemplazar parte de la cadena";

//replace() nos lo cambia solo para mostrarlo pero no lo guarda
cadena.replace("Hola", "Adiós");
console.log(cadena);//Hola, vamos a reemplazar parte de la cadena 
cadena = cadena.replace("Hola", "Adiós");
console.log(cadena);//Adiós, vamos a reemplazar parte de la cadena 

//por defecto solo te modifica la primera coincidencia, para que te cambie todas las coincidencias
//se debe usar -> '/coincidencia/g, g(glogal) **distingue entre mayúsculas y minúsculas
let cadena2 = 'Uno se cae, uno se pierde, uno se rie, uno llora';
console.log(cadena2.replace(/uno/g, "dos"));//Uno se cae, dos se pierde, dos se rie, dos llora

//mayúsculas.toUpperCase() y minúsculas.toLowerCase()
let input = "Contenedor";
let db = "contenedor";

console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//concatenar cadenas
let str_1 = "esta es la Primera cadena.";
let str_2 = "Y esta es la Segunda cadena";
console.log(str_1.concat(" ",str_2, " Esta es la Tercera" + " La Cuarta"));

// Eliniminar los espacios al inicio y al final

let str_3 = "   Eliminar los espacios del principio, del final y de ambos   ";
console.log(str_3.length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);
console.log(str_3.trim().length);

//Obtener el caracter igual que uns lista
let str_4 = 'Esto es cadena';
console.log(str_4.charAt(5));
console.log(str_4[5]);

//Obtener la posicion de una palabra en una cadena
let str_5 = "Hola soy Sergio, me gusta la musica Sergio, la tortilla con cebolla Sergio";
console.log(str_5.indexOf("Sergio"));// devuelve posición de primera coincidencia,si no hay coincidencia devuelve -1
console.log(str_5.lastIndexOf("Sergio"));// devuelve la última coincidencia

//http://regexr.com
let texto_largo = "Todavía es mucho lo que no sabemos o entendemos acerca del universo; mas el gran progreso logrado, sobre todo en los últimos cien años, debe estimularnos a creer que no se halla fuera de nuestro alcance un entendimiento pleno. Quizá no estemos condenados a avanzar siempre a tientas en la oscuridad. Puede que lleguemos a contar con una teoría completa y, en ese caso, seriamos desde luego dueños del universo.";
console.log(texto_largo.match(/no/g));//[ 'no', 'no', 'no', 'no', 'no' ]
console.log(texto_largo.match(/el/g));//[ 'el', 'el', 'el' ]
console.log(texto_largo.match(/a/g).length);//32 'a'
console.log(texto_largo.includes("progreso"));//true
console.log(texto_largo.startsWith("progreso"));//false
console.log(texto_largo.endsWith("universo."));//true
