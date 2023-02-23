const persona={
    nombre:"Jorge",
    edad:24,
    isDeveloper:true,
    saludo:function(){
        console.log('Hello')
    }
}
// console.log(persona)
persona.saludo()

const otra_persona={
    nombre:"Miguel",
    edad:15,
    isDeveloper:true,
    saludo:function(){
        console.log('Hello')
    }
}

otra_persona.saludo()

// Función factory
const creaPersona=(nombre,edad,isDeveloper)=>{
    return {
        nombre, //nombre:nombre
        edad,
        isDeveloper,
        saludo:function(){
            console.log('Hello')
        }
    }
}

const nueva_persona=creaPersona("Juan",23,true)
console.log(nueva_persona)

const nueva_persona2=creaPersona("Maria",44,false)