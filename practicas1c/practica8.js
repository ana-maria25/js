// document.querySelector("button").addEventListener("click", function () {
//     const num1 = parseInt(document.getElementById("num1").value);
//     const num2 = parseInt(document.getElementById("num2").value);
//     const resultado = document.getElementById("resultado");

//     if (isNaN(num1)|| isNaN(num2)){
//       resultado.textContent ="Ingresar numeros";
//     } else if (num1 > num2) {
//         resultado.textContent = "El número 1 es mayor";
//     } else if (num2 > num1) {
//         resultado.textContent = "El número 2 es mayor";
//     } else {
//         resultado.textContent = "Ambos números son iguales";
//     }

// });

// COMPLETÁ:
// Si num1 > num2 → "El número 1 es mayor"
// Si num2 > num1 → "El número 2 es mayor"
// Si son iguales → "Ambos números son iguales"

document.querySelector("button").addEventListener("click", function () {
  const input1 = document.getElementById("num1").value.trim();
  const input2 = document.getElementById("num2").value.trim();
  const rdo = document.getElementById("resultado");

  if (input1 === "" || input2 === "") {
    rdo.textContent = "Se deben ingresar ambos valores";
    return;
  }

  let num1 = Number(input1);
  let num2 = Number(input2);

  if (num1 > num2) {
    rdo.textContent = "El número 1 es mayor";
  } else if (num2 > num1) {
    rdo.textContent = "El número 2 es mayor";
  } else {
    rdo.textContent = "Ambos números son iguales";
  }
});
