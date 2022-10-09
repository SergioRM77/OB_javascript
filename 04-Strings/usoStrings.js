//Trabajar con Strings
let str_simple = 'Esto es texto con comillas simples';
let str_doble = "Esto es un texto con comillas dobles";
let str_comillas = "Para texto entre comillas en cadena \"Se hace asi\" y se respeta el texto";
let str_comillas_simples = 'Esto es lo más "cómodo" ';
let str_comillas_dobles = "Esto es igual que antes 'también' se permite así";
let nombre = "Hola, soy sergio";
let comillas_invertidas = `${nombre} Esto nos permite encadenar una cadena con variables`;
console.log(comillas_invertidas);

let plantilla_html = `
<html>
    <h1>Pagina web</h1>
    <p>${comillas_invertidas}</p>
</html>`;
console.log(plantilla_html);