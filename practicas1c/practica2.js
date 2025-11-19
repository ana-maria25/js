// document.getElementById("edad1").addEventListener("input", function () {
//     const edad1 = this.value;
//     document.getElementById("verEdad1").innerHTML = "Edad 1: " + this.value;
// });

// document.getElementById("edad2").addEventListener("input", function () {
//     const edad2 = this.value;
//     document.getElementById("verEdad2").innerHTML = "Edad 2: " + this.value;
// });

// document.getElementById("btnComparar").addEventListener("click", function () {
//     const e1 = parseInt(document.getElementById("edad1").value);
//     const e2 = parseInt(document.getElementById("edad2").value);
//     const resultado = document.getElementById("resultadoComparacion");
//     if (isNaN(e1) || isNaN(e2)){
//         resultado.textContent="falta una edad";
//     }else if (e1>e2){
//         resultado.textContent="edad 1 es mayor a edad 2";
//     }else if(e1<e2){
//         resultado.textContent="edad 2 es mayor a edad 1";
//     }else{
//         resultado.textContent="las edades son iguales";
//     }
// });

// COMPLETAR: Si ambos están completos, mostrar quién es mayor, si son iguales o si falta alguno

document.getElementById("btnComparar").addEventListener("click", function () {
  const input1 = document.getElementById("edad1").value.trim();
  const input2 = document.getElementById("edad2").value.trim();
  const rdo = document.getElementById("resultadoComparacion");

  if (input1 === "" || input2 === "") {
    rdo.textContent = "Se deben ingresar ambas edades";
    return;
  }

  let edad1 = Number(input1);
  let edad2 = Number(input2);

  if (edad1 > edad2) {
    rdo.textContent = "Persona 1 es mayor";
  } else if (edad1 < edad2) {
    rdo.textContent = "Persona 2 es mayor";
  } else {
    rdo.textContent = "Ambas personas tienen la misma edad";
  }
});
