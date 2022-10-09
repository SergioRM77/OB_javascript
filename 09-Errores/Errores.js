//Errores
//lo común es error humano, mal diseñad el código aunque tambien puede
//deberse a problemas externos como conexiones a bases de datos fallidas
const miFuncion = valor =>{
    if (typeof valor === Number) {
        return valor * 2
    }
    throw new Error("El valor debe ser tipo número");
}
const num = 8;
try {
    //intenta, pero puede fallar
    console.log("esto funciona");
    const doble = miFuncion(num);
    console.log(doble);
} catch (e) {
    //ha fallado, ejecuta esto
    console.log(`El valor de ${e}`);
    console.log("ERROR");
}finally{
    console.log("mensaje final si o si");
}

//tipos de error: InternalError, SyntaxError, TypeError, RangeError y ReferenceError