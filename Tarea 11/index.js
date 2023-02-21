// Función que devuelve siempre "true"
function alwaysTrue() {
    return true;
} 

// Función asíncrona que utiliza setTimeout
async function delayedHello() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}

// Función generadora de índices pares automáticos
function* evenIndexGenerator() {
    let index = 0;
    while (true) {
        yield index;
        index += 2;
    }
}