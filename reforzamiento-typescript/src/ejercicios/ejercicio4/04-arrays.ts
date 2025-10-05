export function ejercicio4() {
    const arrayScores: (number)[] = []
    for (let i = 0; i < 10; i++) {
        arrayScores.push(Math.floor(Math.random() * 51) / 10);
    }
    console.log('Las notas resigtradas son: ', arrayScores);
    let sum = 0
    for (const item of arrayScores) {
        sum += item
    }
    const mean = sum / arrayScores.length;

    console.log('El promedio de las notas es de ' + mean.toFixed(1));
}