// document.getElementById("numA").addEventListener("input", function () {
//     const valorA = this.value;
//     document.getElementById("resA").innerHTML = "Número A: " + valorA;
// });

// document.getElementById("numB").addEventListener("input", function () {
//     const valorB = this.value;
//     document.getElementById("resB").innerHTML = "Número B: " + valorB;
// });

// document.getElementById("btnMultiplicar").addEventListener("click", function () {
//     const a = document.getElementById("numA").value;
//     const b = document.getElementById("numB").value;
//     const resultado = document.getElementById("resultadoMultiplicacion");

//     if(b !== "" && a !==""){
//         const producto =Number(a) * Number(b);
//         resultado.textContent = "Resultado: " + producto;
//     }else{
//         resultado.textContent="Error";
//     }
// });

// COMPLETAR: Si ambos valores existen, mostrar multiplicación, sino mensaje de error

document
  .getElementById("btnMultiplicar")
  .addEventListener("click", function () {
    const input1 = document.getElementById("numA").value.trim();
    const input2 = document.getElementById("numB").value.trim();
    const rdo = document.getElementById("resultadoMultiplicacion");

    // Primero validar si están vacíos
    if (input1 === "" || input2 === "") {
      rdo.textContent = "ERROR: INGRESAR AMBOS NUMEROS";
      return;
    }

    // Convertir a número solo después
    let numero1 = Number(input1);
    let numero2 = Number(input2);

    rdo.textContent = numero1 * numero2;
  });

// Resumen rápido
// Situación	Valor
// Variable declarada pero sin valor	undefined
// Valor "vacío" puesto a propósito por el programador	null
// Input sin texto, string sin caracteres	""
