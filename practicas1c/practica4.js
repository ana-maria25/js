// document.getElementById("numeroParImpar").addEventListener("input", function(){
//     const numeroParImpar = this.value;
//     document.getElementById("numero").innerHTML ="El numero es: " + numeroParImpar;
// })
// document.getElementById("btnParImpar").addEventListener("click", function () {
//     const valor = document.getElementById("numeroParImpar").value;
//     const resultado = document.getElementById("resultadoParImpar");
//     if (valor === "") {
//         resultado.textContent = "Ingresar número";
//     } else {
//         const numero = Number(valor);
//         if (numero % 2 === 0) {
//             resultado.textContent = "El número es par";
//         } else {
//             resultado.textContent = "El número es impar";
//         }
//     }
// });
// COMPLETAR: Si se ingresó un número, decir si es par o impar. Si no, mostrar "Ingresar un número".

document.getElementById("btnParImpar").addEventListener("click", function () {
  const input = document.getElementById("numeroParImpar").value.trim();
  const rdo = document.getElementById("resultadoParImpar");

  if (input === "") {
    rdo.textContent = "Se debe ingresar un numero";
    return;
  }

  let numero = Number(input);

  if (numero % 2 === 0) {
    rdo.textContent = "El numero " + numero + " es par";
  } else {
    rdo.textContent = "El numero " + numero + " es impar";
  }
});
