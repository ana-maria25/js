// document.getElementById("numeroDoble").addEventListener("input", function(){
//     const numeroDoble = this.value;
//     document.getElementById("resultado").innerHTML = "El numero es: " + numeroDoble;
// });
// document.getElementById("btnDoble").addEventListener("click", function () {
//     const num = document.getElementById("numeroDoble").value;
//     const resultado = document.getElementById("resultadoDoble");
//     if (num !== ""){
//         const doble = Number(num*2);
//         resultado.textContent = "El doble es:  " + doble;
//     }else{
//         resultado.textContent ="Ingresar un número para calcular";
//     };
//
// });

// COMPLETAR: Si se ingresó un número, mostrar el doble. Si no, mostrar "Ingresar un número para calcular".

document.getElementById("btnDoble").addEventListener("click", function () {
  const input = document.getElementById("numeroDoble").value.trim();

  const rdo = document.getElementById("resultadoDoble");

  if (input === "") {
    rdo.textContent = "Ingresar un valor para calcular";
    return;
  }

  let numero = Number(input);

  let numeroDoble = numero * 2;
  rdo.textContent = "El doble de " + numero + " es " + numeroDoble;
});
