import './style.css'
import {ejercicio1} from './ejercicios/ejercicio1/01-variables'
import {ejercicio2} from './ejercicios/ejercicio2/02-template-string'
import {ejercicio3} from './ejercicios/ejercicio3/03-object-literal'
import {ejercicio4} from './ejercicios/ejercicio4/04-arrays'
import {ejercicio5} from './ejercicios/ejercicio5/05-functions.ts'
import {ejercicio6} from './ejercicios/ejercicio6/06-obj-destructuring.ts'
import {ejercicio7} from './ejercicios/ejercicio7/07-array-destructuring.ts'

const ejercicios = [
  { nombre: 'Ejercicio 1: Variables', accion: ejercicio1 },
  { nombre: 'Ejercicio 2: Template String', accion: ejercicio2 },
  { nombre: 'Ejercicio 3: Object Literal', accion: ejercicio3 },
  { nombre: 'Ejercicio 4: Arrays', accion: ejercicio4 },
  { nombre: 'Ejercicio 5: Funciones', accion: ejercicio5 },
  { nombre: 'Ejercicio 6: Desestructuración de objetos', accion: ejercicio6 },
  { nombre: 'Ejercicio 7: Desestructuración de arreglos', accion: ejercicio7 },
];

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <h1>Ejercicios de refuerzo en TypeScript</h1>
  <h2>Selecciona el ejercicio que deseas ejecutar:</h2>
  <div id="botones" class="button"></div>
  <h6>Recuerda abrir la consola para ver la ejecución ;)</h6>
`;

// Contenedor de los botones
const contenedor = document.getElementById('botones')!;

// Crea los botones dinámicamente
ejercicios.forEach((e) => {
  const btn = document.createElement('button');
  btn.textContent = e.nombre;
  btn.className = 'button';
  btn.addEventListener('click', () => {
    console.clear();
    console.log(`Ejecutando ${e.nombre}
      `);
    e.accion();
  });
  contenedor.appendChild(btn);
});
