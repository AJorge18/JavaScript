const miFuncion=val=>{
    if(typeof val==="number"){
    return 2*val
    }
    //return false
    throw new Error("El valor debe ser de tipo número")
}

// const elDoble=miFuncion("ala")
const numero="8";

try{
    // Código que puede fallar
    console.log("Está ejecutandose de manera correcta")
    const doble=miFuncion(numero)
    console.log(doble)
}catch(e){
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")

}finally{
    console.log("Esto se va ejecutar tanto si se produce algún error, como si no existe ninguno")
}
// InternalError,SyntaxError,TypeError,RangeError y ReferencieError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error