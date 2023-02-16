// Declaración de variables
const nombre = 'Jorge';
const apellido = 'Aguirre';
const estudiante = `${nombre} ${apellido}`;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const numeroLetras = estudiante.length;
const primeraLetra = nombre.charAt(0);
const ultimaLetra = apellido.charAt(apellido.length - 1);
const estudianteSinEspacios = estudiante.replace(/\s/g, '');
const nombreEnEstudiante = estudiante.includes(nombre);

// Impresión de resultados en consola
console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numeroLetras);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(estudianteSinEspacios);
console.log(nombreEnEstudiante);