const boton = document.querySelector('#miBoton');
    boton.addEventListener('click', () => {
    alert('click en el botón');
});

$('#miBoton').click(() => {
    console.log('Hola, estoy utilizando jQuery')
});