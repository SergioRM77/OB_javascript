//ejercicio2

//factorial de 10 con for
let resultadofor = 1;
for (let i = 2; i <= 10; i++) {
    resultadofor += resultadofor * (i-1);

}
console.log("for: " + resultadofor);

//factorial de 10 con while
let contador = 2;
let resultadoWhile = 1;
while (contador <= 10) {
    resultadoWhile += resultadoWhile * (contador-1);
    contador++;
}
console.log("while: " + resultadoWhile);

//factorial 10 en while con if y break
contador = 2;
resultadoWhile = 1;
finalBucle: while (true) {
    resultadoWhile += resultadoWhile * (contador-1);
    contador++;
    if(contador > 10){
        break finalBucle;
    }
}
console.log("while con break: " + resultadoWhile);
