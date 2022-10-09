const hTexto = document.getElementById("h-texto")

console.log(hTexto);

//2º le decimos que h1 esté pendiente a la llamada
//crea un evento, donde coge los datos obtenidos del DOM
//realiza los cambios, tanto texto como color
hTexto.addEventListener("Cambiotexto", evento => {
    console.log(evento);//evento.detail-> muestra datos
    hTexto.innerText = evento.detail.texto;
    hTexto.style.color = evento.detail.color;
})

//1º llamaos a funcion en consola, interactua con operación anterior
function cambiarTexto(nuevoTexto, color){
    //realiza una llamada con texto clave al addEventListener
    //mandandole los datos nuevos
    const evento = new CustomEvent("Cambiotexto", {
        detail: {
            texto : nuevoTexto,
            color
        }
    })
    //por último lanza el evento sobre el elemento
    hTexto.dispatchEvent(evento)
}