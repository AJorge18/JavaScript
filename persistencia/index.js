// localStorage.setItem("nombre","Jorge")
// localStorage.setItem("nombre","Miguel")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona",JSON.stringify({nombre:"jorge",edad:24}))

// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en stringify
// JSON.parse -> Convierte un objeto/array convertido a traves de stringify en un objeto de Javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion","Jorge")

/* Cookies */
document.cookie="nombreCookie=JorgeCookie"

document.cookie="nombreCaducidad=Nombre;expires=" + new Date(2023,2,1).toUTCString()

console.log(document.cookie)
