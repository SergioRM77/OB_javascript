//Ejercicio 8
/**
 * Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un 
    "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
 */
function sinParam(){
    return true;
}

const miPromesa = new Promise((esperado, rechazado) =>{
    if(true){
        setTimeout(() => {esperado()}, 5000)
    }else{
        rechazado()
    }
})
async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa 2"), 5000)
}

miPromesa
    .then(() => {console.log("Hola Soy una promesa")})
    .catch(()=>{console.log("ERROR");})

function* generadorIndicesPares(){
    let indice = 0;
    while(indice <=10){
        console.log(`Indice: ${indice}`);
        indice+=2;
        yield indice;
    }
}

const gen = generadorIndicesPares();
while (gen.next().value <= 10) {
    gen.next()
}

damePromesa();