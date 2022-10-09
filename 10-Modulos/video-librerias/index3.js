//Instalar axios para hacer llamadas a servicios externos -> npm i axios
//en cada paquete que aparece en npm, hay documentación de uso
//vamos a llamar a una página de ejemplo "PokeAPI", que nos devuelva datos sobre los pokemon

import axios from "axios";

//sacado de la documentacion de axios en npm
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    //console.log(response); Esto nos da todo, pero si queremos solo la informacion concreta añadimos .data
    console.log(response.data);
    console.log("Conseguido");
  })
  .catch(function (error) {
    // handle error
    
    console.log(error);
    console.log("Error!!");
  });

  //todo esto solo muestra datos por terminal, habría que salvarlo en un archivo


  //librerias mas usadas -> https://hackr.io/blog/top-javascript-libraries
  