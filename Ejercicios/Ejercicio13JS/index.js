/**
 * Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal
 */
let str_simple = "Esto es texto con comillas simples";
let str_doble = "Esto es un texto con comillas dobles";
let str_comillas = "Para texto entre comillas en cadena \"Se hace asi\" y se respeta el texto";
let str_comillas_simples = "Esto es lo más \"cómodo\" ";
let str_comillas_dobles = "Esto es igual que antes 'también' se permite así";
let nombre = "Hola, soy sergio";
let comillas_invertidas = `${nombre} Esto nos permite encadenar una cadena con variables`;
console.log(comillas_invertidas);
console.log(str_simple);
console.log(str_doble);
console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
let plantilla_html = `
<html>
    <h1>Pagina web</h1>
    <p>${comillas_invertidas}</p>
</html>`;
console.log(plantilla_html);