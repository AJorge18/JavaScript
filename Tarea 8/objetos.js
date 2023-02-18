// Objeto con mis datos personales
let misDatos = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    altura: 1.8,
    eresDesarrollador: true
};

// Variable que obtiene mi edad a partir del objeto
let miEdad = misDatos.edad;
console.log(miEdad);

// Lista con objetos de mis datos personales y mis dos mejores amigos
let listaDatos = [
    misDatos,
    {
    nombre: 'María',
    apellido: 'Gómez',
    edad: 28,
    altura: 1.6,
    eresDesarrollador: false
    },
    {
    nombre: 'Carlos',
    apellido: 'Sánchez',
    edad: 32,
    altura: 1.75,
    eresDesarrollador: true
    }
];
console.log(listaDatos);

// Nueva lista ordenada por edad, de mayor a menor
let listaOrdenadaPorEdad = listaDatos.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenadaPorEdad);