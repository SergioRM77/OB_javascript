//esta es la manera actual que más se usa para importar variables y métodos
import { suma, elevado, factorial, multiplica } from './Modulo/matematicas.js';
import getAutor, {libro} from './Modulo/literatura.js'

//tambien se puede importar todo directamente 
//import * as moduloMatematicas from "./Modulo/matematicas.js"
//const suma = moduloMatematicas.suma(2,5)

const sum = suma(4,12);
console.log(sum);

const potencia = elevado(4,5);
console.log(potencia);

console.log(getAutor);
console.log(libro);