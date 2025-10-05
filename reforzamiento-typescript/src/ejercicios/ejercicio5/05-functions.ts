export function ejercicio5() {
    // Función que calcula el promedio de un arreglo de números
    function calcularPromedio(numeros: number[]): number {
        if (numeros.length === 0) {
            throw new Error("El arreglo no puede estar vacío");
        }

        const suma = numeros.reduce((acum, num) => acum + num, 0);
        return suma / numeros.length;
    }

    // Ejemplo de uso con calificaciones
    const calificaciones: number[] = [4.5, 3.8, 5.0, 4.0, 4.2];
    const promedio = calcularPromedio(calificaciones);

    console.log("Calificaciones:", calificaciones);
    console.log("Promedio:", promedio.toFixed(2));
}
