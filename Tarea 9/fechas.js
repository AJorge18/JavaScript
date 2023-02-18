// Fecha de hoy
let hoy = new Date();
console.log(hoy);

// Fecha de mi nacimiento
let fechaNacimiento = new Date(1998, 11, 31);
console.log(fechaNacimiento);

// Variable que indica si hoy es más tarde que la fecha de mi nacimiento
let esMasTarde = hoy > fechaNacimiento;
console.log(esMasTarde);

// Día de mi nacimiento
let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

// Mes de mi nacimiento
let mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

// Año de mi nacimiento
let anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);