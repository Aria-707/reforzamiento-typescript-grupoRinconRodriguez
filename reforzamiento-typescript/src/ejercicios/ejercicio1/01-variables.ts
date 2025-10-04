const nameStudent='Sharon'
// Como su nombre lo indica, const es una forma de declarar un dato constante, el cual no puede ser actualizado posteriormente
let ageStudent = 22
// Sin embargo, let es permite declarar una variable que puede cambiar su valor después sin ningún problema
console.log('Antes del cambio en edad:\nEl nombre del estudiante es '+nameStudent+' y tiene '+ageStudent+" años.\n")

ageStudent = 23
// En la línea 7 se puede ver cómo se actualiza el valor de la variable creada para almacenar la edad

// nameStudent='Ariadna'
// Pero si se intenta usar esta línea para cambiar el nombre del estudiantes, habrá un error que establece que este valor no puede ser modificado,
// ya que el nombre del estudiante se declaró como una constante. 
// Sin embargo, let es permite declarar una variable que puede cambiar su valor después sin ningún problema
console.log('Después del cambio en edad:\nEl nombre del estudiante es '+nameStudent+' y tiene '+ageStudent+" años.\n")
