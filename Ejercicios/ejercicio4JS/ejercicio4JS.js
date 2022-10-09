//ejercicio4JS
let altura_cm = 189;
let altura_m = 1.89;
let peso = 82.5;
//redondeo al alza
let altura_round_up = altura_m.toFixed(1);
console.log(altura_round_up);
console.log(Math.ceil(altura_round_up));

//redondeo a la baja
let peso_round_down = Math.floor(peso);
console.log(peso_round_down);

if (Number.MAX_VALUE + 1 == Number.MAX_VALUE) {
    console.log(`${Number.MAX_VALUE + 1} == ${Number.MAX_VALUE} Si es igual, el tope nunca puede aumentar en JavaScript`);
} else {
    console.log("No es el mismo, cambia");
}