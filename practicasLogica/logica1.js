// 🟦 EJERCICIO 1 — Comparador simple (igual al del parcial, pero distinto)
// Consigna:

// Hay 3 botones numéricos: 4, 5, 9
// Hay 3 operadores: <, >, !=
// En la parte superior hay un <p id="resultado"></p>

// El usuario debe:
// Elegir un número
// Elegir un operador
// Elegir un número

// Cuando el usuario elige el último número, mostrar:

// ➡️ Operacion: 4 != 5 = Verdadero
// ➡️ Operacion: 9 < 4 = Falso

// Requerimientos:
// Si el usuario intenta poner dos operadores seguidos → “Operación inválida”.
// Usar forEach para asignar los eventos a los botones.
// Al terminar la operación, limpiar todo para volver a empezar.

//variable para guardar la operacion
let num1 = null;
let operador = null;
let num2 = null;

const resultado = document.getElementById("resultado");
const botones = document.querySelectorAll("button"); //NodeLista-->lista con los botones

//asignamos eventos

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    //Esto lee el texto del botón clickeado ("4", "5", "<", "!="...).
    const valor = boton.textContent;

    if (!isNaN(valor)) {
      //si es un numero->entra aca
      if (num1 === null) {
        num1 = Number(valor);
        resultado.textContent = `Operacion ${num1}`;
        return;
      }

      if (operador === null) {
        resultado.textContent = "Operacion invalida (falta operador)";
        resetear();
        return;
      }

      //si llegamos aca --> guardo segundo numero
      num2 = Number(valor);

      //ahora evaluamos
      let rta = evaluar(num1, operador, num2);
      resultado.textContent = `Operacion: ${num1} ${operador} ${num2} = ${rta}`;

      //limpiar para la proxima operacion
      resetear();
      return;
    }

    // 📌 Si es un operador (< > !=)
    if (operador === null && num1 !== null) {
      operador = valor;
      resultado.textContent = `Operacion: ${num1} ${operador}`;
    } else {
      resultado.textContent = "Operacion invalida";
      resetear();
    }
  });
});

//funcion comparar
function evaluar(a, op, b) {
  if (op === "<") return a < b ? "Verdadero" : "Falso";
  if (op === ">") return a > b ? "Verdadero" : "Falso";
  if (op === "!=") return a != b ? "Verdadero" : "Falso";
}

function resetear() {
  num1 = null;
  operador = null;
  num2 = null;
}

// // -------------------------------------------------------------
// // 🔹 VARIABLES GLOBALES (guardan el estado de la operación)
// // -------------------------------------------------------------

// let num1 = null;       // Primer número elegido
// let operador = null;   // Operador elegido (<, >, !=)
// let num2 = null;       // Segundo número elegido

// // Elemento donde mostramos resultados
// const resultado = document.getElementById("resultado");

// // Seleccionamos TODOS los botones del HTML
// const botones = document.querySelectorAll("button");

// // -------------------------------------------------------------
// // 🔹 AGREGAMOS UN EVENTO A CADA BOTÓN
// //   forEach = repetir un bloque de código para cada botón
// // -------------------------------------------------------------

// botones.forEach(function (boton) {
//   boton.addEventListener("click", function () {

//     // El texto del botón que se clickeó ("4", "5", "<", "!=")
//     const valor = boton.textContent;

//     // =========================================================
//     // 🔹 1) PRIMERO PREGUNTAMOS: ¿EL BOTÓN ES UN NÚMERO?
//     //    isNaN() detecta si NO es un número.
//     //    !isNaN(valor) significa "sí, es número".
//     // =========================================================

//     if (!isNaN(valor)) {

//       // 📌 Si todavía NO tenemos num1 → este número es num1
//       if (num1 === null) {
//         num1 = Number(valor);           // Convertimos texto → número
//         resultado.textContent = `Operacion: ${num1}`;
//         return;                         // Salimos. NO seguimos ejecutando.
//       }

//       // 📌 Si ya tenemos num1 pero NO tenemos operador aún → error
//       if (operador === null) {
//         resultado.textContent = "Operacion invalida (falta operador)";
//         resetear();
//         return;
//       }

//       // 📌 Si llegamos acá → ya hay num1 y operador → este es num2
//       num2 = Number(valor);

//       // Evaluamos la operación completa
//       let rta = evaluar(num1, operador, num2);

//       resultado.textContent =
//         `Operacion: ${num1} ${operador} ${num2} = ${rta}`;

//       // Limpiamos para que el usuario empiece otra operación
//       resetear();
//       return;
//     }

//     // =========================================================
//     // 🔹 2) SI NO ERA UN NÚMERO → entonces es un OPERADOR
//     // =========================================================

//     // 📌 Solo podemos guardar operador si:
//     //    - ya tenemos num1 (!= null)
//     //    - todavía no hay operador
//     if (operador === null && num1 !== null) {
//       operador = valor;
//       resultado.textContent = `Operacion: ${num1} ${operador}`;
//     }

//     // 📌 Si NO se cumple lo anterior → es una operación inválida
//     else {
//       resultado.textContent = "Operacion invalida";
//       resetear();
//     }

//   });
// });

// // -------------------------------------------------------------
// // 🔹 FUNCION PARA EVALUAR LA OPERACION
// // -------------------------------------------------------------
// function evaluar(a, op, b) {
//   if (op === "<") return a < b ? "Verdadero" : "Falso";
//   if (op === ">") return a > b ? "Verdadero" : "Falso";
//   if (op === "!=") return a != b ? "Verdadero" : "Falso";
// }

// // -------------------------------------------------------------
// // 🔹 RESET = volver todo a estado inicial
// // -------------------------------------------------------------
// function resetear() {
//   num1 = null;
//   operador = null;
//   num2 = null;
// }

// 🎓 RESUMEN PARA PRINCIPIANTES (CLAVE CLAVE CLAVE)
// ✔️ ¿POR QUÉ EL BLOQUE DE OPERADORES ESTÁ ABAJO?

// Porque solo se ejecuta cuando NO se cumple que el botón sea un número.

// 👉 Si tocás un número → entra al primer if y hace return,
// entonces el código del operador no se ejecuta aunque esté después.

// 👉 Si tocás un operador → NO entra al primer if → pasa al segundo.

// Esto se llama flujo de ejecución por condiciones, y es MUY importante entenderlo para programar bien.
