//Funciones asincronas
/**
 * Las tareas pueden ejecutarse secuencialmente, esto significa que podemos indicar 
 * que algunas tareas se pasen a segundo plano y esperen a su turno para ser reanudadas y ejecutadas.
 * 
 * JavaScript es un lenguaje de ejecución sobre un solo hilo, esto significa que sólo 
 * puede ejecutar una tarea a la vez. Cuando una operación tarda demasiado 
 * o está esperando la respuesta de otra, decimos que bloquea las demás instrucciones, 
 * precisamente porque JavaScript no puede ejecutar dos a la vez.
 */

function miAsinc(){
    //Hace llamada a base de datos externa
    //puede darnos algun error
}

//Las Promesas en JavaScript son acciones que se resolverán a futuro (cuando se pueda) 
//y que sabremos si se llevaron a cabo con éxito o no
const miPromesa = new Promise((resolve, reject) =>{
    const i = Math.floor(Math.random() * 2)//numero aleatorio de 2 -> 0 y 1, math.floor es por hacerlo entero
    //si se cumple objetivo ejecuta
    if(i !==0){
        resolve()
    //si no, ejecuta un rechazo
    }else{
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Esto se ejecuta siempre"))

//async await
