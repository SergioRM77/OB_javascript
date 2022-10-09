//Carga y sobrecarga de funciones

function saludar(){
    hola();
}

function hola(){
    console.log("hola a todos");
}
saludar()
///la carga de funciones se ejecuta así (global se llamaría a el conjunto del programa)
/// 1. carga función global()
/// 2. carga saludar() global() - carga la memoria de funciones
/// 3. carga hola() saludar() global() - una vez ejecutado la quita de la carga
/// 4. carga saludar() global()
/// 5. global()

/**
 * En programación orientada a objetos la sobrecarga se refiere a la posibilidad
 * de tener dos o más funciones con el mismo nombre pero funcionalidad diferente.
 * Es decir, dos o más funciones con el mismo nombre realizan acciones diferentes.
 */

//La recursividad consiste en una función que se llama a si misma, hay que gastar cuidado
//ya que se puede producir una sobrecarga en memoria por ejecución de proceso infinito
//siempre debe tener un corte.

//function recursividad() {
//    recursividad()
//}
//recursividad() //Maximun call stack exceeded