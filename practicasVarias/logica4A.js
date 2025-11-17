// Ejercicio 4A — Secuencia simple

// Consigna:
// Completar el JS para:

// Generar una secuencia aleatoria de colores.

// Al presionar “Comenzar”, reproducir la secuencia (iluminando los divs).

// Luego el usuario deberá repetirla haciendo click.

// Mostrar en <p id="puntos"> la puntuación actual.

// Si falla, mostrar “Perdiste”.

//botones del juego
//Es un objeto con 4 propiedades,no es un ARRAY
const botones = {
  rojo: document.getElementById("rojo"),
  verde: document.getElementById("verde"),
  azul: document.getElementById("azul"),
  amarillo: document.getElementById("amarillo"),
};

const btnComenzar = document.getElementById("comenzar");
const puntosHTML = document.getElementById("puntos");

//secuencias

let secuenciaJuego = [];
let secuenciaUsuario = [];

//puntaje
let puntos = 0;

//Cargar mejor puntuacion desde localStorage
let mejor = localStorage.getItem("mejorPuntuacion") || 0;

//BOTON COMENZAR

btnComenzar.addEventListener("click", function () {
  secuenciaUsuario = [];

  //agregar color aleatorio a la secuenci
  const colores = ["rojo", "verde", "azul", "amarillo"];

  //Math.random()->Devuelve un número entre 0 y 1:
  //0.12,0.54,0.91,0.003 etc;

  //Multiplicamos por colores.length
  // colores.length es la cantidad de elementos en el array.
  // Si el array tiene 4 colores:Math.random() * 4
  //Math.floor(...): Convierte el número en un ENTERO 0, 1, 2 o 3-->0.98=0;1.33=1 ect...
  //Sirve para que nos quede un índice válido del array.
  // colores[...]:Accedemos al elemento del array en esa posición.
  // Si salió 2:colores[2] → "azul"
  // Si salió 0:colores[0] → "rojo"

  //ENTONCES:La línea completa elige un color del array al azar.
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

  secuenciaJuego.push(colorAleatorio);

  //Mostrar secuencia
  mostrarSecuencia();
});

//MOSTRAR SECUENCIA (SIN ANIMACION)

function mostrarSecuencia() {
  alert("Secuencia: " + secuenciaJuego.join("->"));
}

//CLICK DEL USUARIO
// Object.keys() es un método de JavaScript que recibe un objeto y devuelve un array con los nombres de sus propiedades.EJ:
// const persona = {
//   nombre: "Ana",
//   edad: 20,
//   ciudad: "Buenos Aires",
// };
// RESULTADO: ["nombre", "edad", "ciudad"]

// console.log(Object.keys(persona));
Object.keys(botones).forEach(function (color) {
  botones[color].addEventListener("click", function () {
    //registrar lo que cliquea el usuario
    secuenciaUsuario.push(color);

    //comparar paso a paso
    //ej:secuenciaUsuario = ["rojo", "verde"];
    // secuenciaUsuario.length → 2
    // Último índice → 2 - 1 = 1
    //secuenciaUsuario[0] = "rojo"
    // secuenciaUsuario[1] = "verde" ← último elemento
    //const index = secuenciaUsuario.length - 1;->hace que index = 1;
    const index = secuenciaUsuario.length - 1;

    if (secuenciaUsuario[index] !== secuenciaJuego[index]) {
      alert("x perdiste");
      reiniciaJuego();
      return;
    }

    // Si completó toda la secuencia correctamente
    if (secuenciaUsuario.length === secuenciaJuego.length) {
      puntos++;
      puntosHTML.textContent = puntos;

      //gurdar mejor puntuacion
      if (puntos > mejor) {
        mejor = puntos;
        localStorage.setItem("mejorPuntuacion", mejor);
      }

      alert("GOOD!! AVANZAS AL SIGUIENTE NIVEL");

      // agregar un nuevo color
      const colores = ["rojo", "verde", "azul", "amarillo"];
      const nuevo = colores[Math.floor(Math.random() * colores.length)];
      secuenciaJuego.push(nuevo);

      // vaciar clics del usuario
      secuenciaUsuario = [];

      // mostrar nueva secuencia
      mostrarSecuencia();
    }
  });
});

//REINICIAR JUEGO

function reiniciaJuego() {
  alert("Tu puntuacion final es: " + puntos);
  puntos = 0;
  puntosHTML.textContent = puntos;
  secuenciaJuego = [];
  secuenciaUsuario = [];
}
