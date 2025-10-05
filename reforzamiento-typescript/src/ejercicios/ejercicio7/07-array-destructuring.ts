export function ejercicio7() {
    // Reutilizamos el arreglo de calificaciones
    const calificaciones: number[] = [4.5, 3.8, 5.0, 4.0, 4.2];

    // Desestructuración: obtenemos el primer y segundo elemento
    const [primera, segunda] = calificaciones;

    // Mostrar en consola
    console.log("Primera calificación:", primera);
    console.log("Segunda calificación:", segunda);
}