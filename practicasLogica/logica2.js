// 🟩 EJERCICIO 2 — Calculadora de suma/resta
// Consigna:

// Hay 3 botones numéricos: 10, 20, 30
// Hay 2 operadores: + y -
// Botón Resultado
// Pantalla arriba: <p id="pantalla"></p>

// El usuario hace:
// Clic en un número → “10”
// Clic en un operador → “10 +”
// Clic en otro número → “10 + 20”
// Clic en Resultado → “10 + 20 = 30”

// Requerimientos:
// Usar variables num1, operador, num2
// Al finalizar, limpiar las variables
// Si falta algo mostrar: “Operación incompleta”

//variable globales gurdan estado de operacion
let num1 = null;
let operador = null;
let num2 = null;

//elemento donde mostramos resultado
const pantalla = document.getElementById("pantalla");

//seleccionamos todos los botones del HTML
const botones = document.querySelectorAll("button");

// ***AGREGAMOS EL EVENTO A CADA BOTON
// forEach = repetir un bloque de codigo para cada boton***

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    //obtenemos el texto del boton que se clickeo
    //("10","20","+","-"..)
    const valor = boton.textContent;

    //1-PRIMERO PREGUNTAMOS: EL BOTON ES UN NUMERO?

    if (!isNaN(valor)) {
      // si todavia no tenemos num1 --> este numero es num1
      if (num1 === null) {
        num1 = Number(valor); //convertimos texto en numero
        pantalla.textContent = `Operacion: ${num1}`;
        return; //salimos. no seguimos ejecutando
      }

      //si ya tenemos num1 pero NO tenemos operador aun--> ERROR

      if (operador === null) {
        pantalla.textContent = "Operacion invalida (falta operador)";
        num1 = null;
        operador = null;
        num2 = null;
        return;
      }

      //si llegamos aca-->ya hay num1 y operador->este es num2
      num2 = Number(valor);
      pantalla.textContent = `Operación: ${num1} ${operador} ${num2}`;
      return;
    }

    // si es operador (+o-)
    if (valor === "+" || valor === "-") {
      if (num1 !== null && operador === null) {
        operador = valor; //guardamos valor
        pantalla.textContent = `Operacion: ${num1} ${operador}`;
      } else {
        pantalla.textContent = "Operacion invalida";
        num1 = null;
        operador = null;
        num2 = null;
      }

      return;
    }

    //si apreto resultado
    if (valor === "Resultado") {
      if (num1 === null || operador === null || num2 === null) {
        pantalla.textContent = `Operacion incompleta`;
        return;
      }

      function evaluar(num1, operador, num2) {
        if (operador === "+") return num1 + num2;
        if (operador === "-") return num1 - num2;
      }

      let rta = evaluar(num1, operador, num2);

      pantalla.textContent = `Operación: ${num1} ${operador} ${num2} = ${rta}`;
      num1 = null;
      operador = null;
      num2 = null;
    }
  });
});
