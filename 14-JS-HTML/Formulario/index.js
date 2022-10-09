const formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", evento => {
    console.log(evento);
    
    //esto evita que se recargue la página
    evento.preventDefault();
})