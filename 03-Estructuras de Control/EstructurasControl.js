//Bifurcaciones if ... else
let saldo = 50;
let efectivo = 20;

if(efectivo < saldo){
    console.log("Puedes sacar dinero");
} else{
    console.log("No puedes sacar dinero");
}

if(efectivo > saldo){
    console.log("No hay saldo");
} else if(efectivo == saldo && saldo != 5,4){
    console.log("Estarás a 0");
} else{
    console.log("Puedes sacar dinero");
}

//Sentencias Switch

let nota = 5;
switch (nota){
    case 5:
        console.log("Sobresaliente");
        break;//si no se coloca se ejecutarán todos los de abajo en cascada
    case 4:
        console.log("Notable");
        break;
    case 3:
        console.log("Suficiente");
        break;
    case 2:
        console.log("Insuficiente");
        break;
    case 1:
        console.log("Repite");
    default:
        console.log("Error");
        break;

}