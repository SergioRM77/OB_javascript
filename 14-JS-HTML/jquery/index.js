//$(selector).accion()
//$("li").hide()

//mirar en pagina de jquery para ver todos los eventos
//disponibles para interactuar
$(() => {
    //selector id => #nombre
    //selector class => .nombre
    //$("h1").hide()
    //$("#el-1").hide()

    //ocultar Titulo con evento de boton
    $(".hide-btn").click(() => {
        console.log("Ocultando");
        //$("h1").hide()
        //efecto desvanecimiento
        $("h1").fadeOut()
    })

    //mostrar Titulo con evento de boton
    $(".show-btn").click(() => {
        console.log("Mostrando");
        //$("h1").show()
        //efecto desvanecimiento
        $("h1").fadeIn()
    })

    //cambiar color a titulo
    $("ul").click(() => {
        $("h1").css({ color: "red"})
    })

    //añade elemento  a la lista
    $(".new-element").click(() => {
        console.log("Add");
        $("ul").append("<li>Nuevo Elemento</li>")
    })

    //efecto hover al poner raton sobre elemento
    $("li").mouseenter((elem) => {
        console.log("efecto hover");
        elem.target.style.color = "blue";
    })

    //volver a mostrar elemento en color negro
    $("li").mouseleave((elem) => {
        elem.target.style.color = "black";
    })
})