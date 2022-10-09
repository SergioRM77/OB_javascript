//Comparaciones

//Igualdad
let a = 5;
let b = 5;
let c = "5";


if(a === b){
    console.log("Aqui entra si es igual en valor y tipo");
}

if(a === c){
    console.log("Aqui No entra entre numerico y String");
}

if(a == c){
    console.log("Aqui entra porque solo compara el valor");
}
//desigualdad !=/!==
if(a !== c){
    console.log("Aqui entra porque aunque tienen mismo valor, el tipo es diferente");
}

if(a != c){
    console.log("Aqui NO entra");
}

// Comparaciones </>/>=/<=
a = 10;
b = 5;
if(a <= c){
    console.log("Aqui No entra");
}

if(a >= c){
    console.log("Aqui entra porque solo compara el valor");
}