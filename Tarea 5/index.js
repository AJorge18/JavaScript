const alturaEnCm = 170;
const alturaEnMetros = 1.70;
const pesoEnKg = 60.5;
const alturaRedondeada = Math.ceil(alturaEnMetros);
const pesoRedondeado = Math.floor(pesoEnKg);
const maxPlusOne = (Number.MAX_SAFE_INTEGER + 1) === Number.MAX_SAFE_INTEGER;

console.log("Altura en centímetros:", alturaEnCm);
console.log("Altura en metros:", alturaEnMetros);
console.log("Peso en kilogramos:", pesoEnKg);
console.log("Altura redondeada hacia arriba:", alturaRedondeada);
console.log("Peso redondeado hacia abajo:", pesoRedondeado);
console.log("¿El máximo valor que se puede obtener en JavaScript + 1 es igual al máximo valor que se puede obtener en JavaScript?", maxPlusOne);