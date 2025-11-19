// document.getElementById("numero1").addEventListener("input", function () {
//     const numero1 = this.value;
//     document.getElementById("resultado1").innerHTML = "El resultado 1 es: " + numero1;
// });

// document.getElementById("numero2").addEventListener("input", function () {
//     const numero2 = this.value;
//     document.getElementById("resultado2").innerHTML = "El resultado 2 es: " + numero2;
// });

// document.querySelector("button").addEventListener("click", function(){
//     const numero1 = document.getElementById("numero1").value;
//     const numero2 = document.getElementById("numero2").value;
//     const concatenacion = document.getElementById("concatenacion");
//     if(numero1 !== "" && numero2 !== ""){
//         concatenacion.textContent = "concatenacion: " + numero1 + numero2;
//     }else{
//         concatenacion.textContent="Se deben ingresar ambos numeros"
//     }
// });

//Agregar/modifiar todo el codigo que crea necesario para:

//- Al dar click en el boton "Mostrar concatenacion" se debe mostrar el resultado de concatenar ambos numeros.
//- Ej: numero1=123 numero2=999 concatenacion=123999
//- En caso de no haberse ingresado alguno de los numero2, se debe ver el texto "Se deben ingresar ambos numeros"

document.querySelector("button").addEventListener("click", function () {
  const input1 = document.getElementById("numero1").value.trim();
  const input2 = document.getElementById("numero2").value.trim();
  const rdo = document.getElementById("concatenacion");

  if (input1 === "" || input2 === "") {
    rdo.textContent = "Se deben ingresar ambos numeros";
  } else {
    rdo.textContent = input1 + input2;
  }
});
