interface Student {
    name: string;
    age: number;
    course: string;
    semester: string;
}

const camilo: Student = {
    name: 'Camilo' ,
    age: 21,
    course: 'Ingeniería de Sistemas y Computación' ,
    semester: 'IV',
}

function describe (student: Student): string{
    return `El estudiante ${student.name} se encuentra cursando el semestre ${student.semester} de la carrera de ${student.course}. El estudiante actualemnte tiene ${student.age} años.`
}

const description = (describe(camilo))
console. log(description) ;