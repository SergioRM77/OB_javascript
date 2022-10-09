const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Arrastrando parrafo " + parrafo.innerText);
        
        //esto hace que cuando se esté arrastrando cambiemos el estilo css
        parrafo.classList.add("dragging")
        //esto hace que se envien los datos de id de parrafo para transferirlos 
        event.dataTransfer.setData("id", parrafo.id)

        //imagen durante arrastre, solo es posible si está presente en la ventana html
        const ele_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(ele_fantasma,0,0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("Fin de arrastre");
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event  => {
        //Esto previene el comportamiento por defecto de 
        // html
        event.preventDefault()
        //console.log("Drag Over");
        //mover posicion dentro de seccion
        event.dataTransfer.dropEffect = "link"
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        //en  el momento en el que se haga drop, se coge los datos de evento
        //con nombre id
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("id de parrafo: " , id_parrafo);

        //guardamos el elemento por el id
        const parrafo = document.getElementById(id_parrafo)
        //mandamos el elemento anterior a una seccion como hijo
        seccion.appendChild(parrafo)
    })
})