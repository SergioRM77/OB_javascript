// For
for(let i = 0; i < 10; i++){
    console.log(i);
}

let lista = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//for ... of
for (const valor of lista) {
    console.log(valor);
}

// forEach
lista.forEach(valor =>{
    console.log(valor);
})

// for ... in
let persona = {
    nombre : "Sergio",
    edad : 30,
    isDeveloper : true
}

for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
    console.log(propiedad + " : " + persona[propiedad]);
}

// while/ do-while
let i = 0;
let max = 10;
while (i < max) {
    console.log(i);
    i++;
}
i = 10;
do {
    console.log(i);
    i--;
} while (i > 0);