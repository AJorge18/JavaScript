// Variables
const firstName = 'Jorge';
const lastName = 'Aguirre';

// Objectos
const person = {
    firstName: firstName,
    lastName: lastName
};

// Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem('person', JSON.stringify(person));

// Almacena el objeto anterior en la LocalStorage
localStorage.setItem('person', JSON.stringify(person));

// Cookie que caduca en 2 minutos
const cookieValue = JSON.stringify(person);
document.cookie = `person=${cookieValue};expires=${new Date(Date.now() + 120000).toUTCString()};`;

