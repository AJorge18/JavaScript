class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.asignaturas = ["Javascript", "HTML", "CSS"];
    }

    obtenDatos() {
        return {
        nombre: this.nombre,
        asignaturas: this.asignaturas
        }
    }
}

    const nuevoEstudiante = new Estudiante("Jorge");
    console.log(nuevoEstudiante.obtenDatos());