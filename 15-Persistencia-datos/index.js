// localStorage.setItem("nombre", "Sergio")
//localStorage.setItem("nombre", "Pepe")

console.log(localStorage.getItem("nombre"));

localStorage.setItem("persona", JSON.stringify({nombre : "sergio",  edad: 30}));
console.log(JSON.parse(localStorage.getItem("persona")));

//JSON.stringify -> combierte un array/objeto en string
//JSON.parse -> combierte lo anterior en un objeto de javascript


localStorage.removeItem("nombre")

//esto solo aparece en sesion, en ventana nueva no aparece
sessionStorage.setItem("nombre-sesion", "luis")

//Cookies
document.cookie  = "nombreCookie=Sergiocookie"
document.cookie  = "nombreCaducidad=nombre;expires=" + new Date(2023,0,1).toUTCString()
console.log(document.cookie);