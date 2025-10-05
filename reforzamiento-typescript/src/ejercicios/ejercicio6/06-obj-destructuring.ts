export function ejercicio6() {
    // Reutilizamos un objeto estudiante
    const estudiante = {
        nombre: "Juan Pérez",
        edad: 21,
        carrera: "Ingeniería en Sistemas",
        semestre: 6
    };

    // Desestructuración de propiedades del objeto
    const { nombre, carrera } = estudiante;

    // Mostrar en consola
    console.log("Nombre del estudiante:", nombre);
    console.log("Carrera:", carrera);
}