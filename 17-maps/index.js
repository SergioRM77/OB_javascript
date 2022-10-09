function initMap(){
    //console.log("adfgadfg");
    const position = {
        lat: -25.363,
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: position
    })
    const marker = new google.maps.Marker({
        position: position,
        map,
        title: "Posición Inicial"
    })

    //obtener geolocalización
    marker.setPosotion({lat, lng})

    geoPosition()
}

function geoPosition(){
    if (navigator.geolocation) {
        const geoloc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centrarMapa, 
            onError, options)

    } else{
        alert("Tu navegador no admite geolocalización")
    }
}

function centrarMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos);
    marker.setPosotion(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.log("Se ha producido un error en geolocalización");
    console.error(error);
}