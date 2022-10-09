// break y continue, no son buenas practicas, evitar en todo lo posible

let lista = [1,2,3,4,5,6,7];
for (let i = 0; i < lista.length; i++) {
    if(lista[i] == 3){
        continue;
    }
    console.log(lista[i]);//1,2,4,5
    if(lista[i] == 5){
        break;
    }
}