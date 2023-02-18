// Lista de la compra
let listaCompra = ['Leche', 'Pan', 'Huevos', 'Queso', 'Frutas'];
console.log(listaCompra);

listaCompra.push('Aceite de Girasol');
console.log(listaCompra);

listaCompra.splice(listaCompra.indexOf('Aceite de Girasol'), 1);
console.log(listaCompra);

// Lista de películas
let peliculasFavoritas = [
    {titulo: 'El Gran Hotel Budapest', director: 'Wes Anderson', fecha: '2014'},
    {titulo: 'Inception', director: 'Christopher Nolan', fecha: '2010'},
    {titulo: 'El Club de la Pelea', director: 'David Fincher', fecha: '1999'}
];
console.log(peliculasFavoritas);

let peliculasRecientes = peliculasFavoritas.filter((pelicula) => pelicula.fecha > '2010');
console.log(peliculasRecientes);

let directores = peliculasFavoritas.map((pelicula) => pelicula.director);
console.log(directores);

let titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);
console.log(titulos);

let directoresYTitulos = directores.concat(titulos);
console.log(directoresYTitulos);

let directoresYTitulosSpread = [...directores, ...titulos];
console.log(directoresYTitulosSpread);