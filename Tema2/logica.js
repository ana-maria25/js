// document.getElementById("numero1").addEventListener("input", function () {
//   const numero1 = this.value;
//   const resultado = numero1;

//   document.getElementById("resultado").innerHTML =
//     "El resultado es: " + resultado;
// });

// document.getElementById("numero2").addEventListener("input", function () {
//   const numero2 = this.value;
//   const resultado = numero2;
//   document.getElementById("resultado").innerHTML =
//     "El resultado es: " + resultado;
// });

document.getElementById("btn").addEventListener("click", function () {
  const numero1 = document.getElementById("numero1").value;

  const numero2 = document.getElementById("numero2").value;

  //validar que ambos numero fueron ingresados

  if (numero1 === "" || numero2 === "") {
    resultado.innerHTML = "Se deben ingresar ambos numeros";

    // return; = “Hasta acá llegó la función. No sigas.”
    return;
  }

  // Concatenacion (convertir a string y unir)

  const concatenacion = numero1.toString() + numero2.toString();

  resultado.innerHTML = "El resultado es: " + concatenacion;
});
