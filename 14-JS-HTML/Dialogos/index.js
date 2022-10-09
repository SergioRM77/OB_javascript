const boton = document.querySelector("#btn")

console.log(boton);

boton.addEventListener("click", (() => {
    //alert("se ha hecho click");

    //esto se llama ternaria en JS, si es true muestra ok, en caso contrio nada
    //confirm("¿Estás de acuerdo?") && console.log("ok");
    //Ternaria completa
    confirm("¿Estás de acuerdo?") ? console.log("ok") : console.log("NO!");

    
}))

//Encadenar operaciones 
const botonInfo = document.querySelector("#info")
    botonInfo.addEventListener("click", () => {
        const nombre = prompt("¿Cuál es tu nombre?");
        nombre ? console.log("tu nombre es: " + nombre) 
            : console.log("Nombre no encontrado");;
})

const lista = [
    {nombre: "sergio", edad: 25},
    {nombre: "Lucas", edad: 50},
    {nombre: "Ana", edad: 32}];

    //muestra en consola una tabla de datos
console.table(lista)