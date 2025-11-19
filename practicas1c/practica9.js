// document.querySelector("button").addEventListener("click", function () {
//     const a = document.getElementById("a").value;
//     const b = document.getElementById("b").value;
//     const suma = document.getElementById("suma");

//     if (a === "" || b === ""){
//         suma.textContent = "Debés ingresar ambos valores";
//     }else{
//         const resultado = parseInt(a)+ parseInt(b)
//         suma.textContent = "Resultado: " + resultado;
//     }

// });

// COMPLETÁ:
// Si alguno está vacío, mostrar "Debés ingresar ambos valores"
// Si están ambos, mostrar la suma: "Resultado: " + (parseInt(a) + parseInt(b))

document.querySelector("button").addEventListener("click", function () {
  const a = document.getElementById("a").value.trim();
  const b = document.getElementById("b").value.trim();
  const rdo = document.getElementById("suma");

  if (a === "" || b === "") {
    rdo.textContent = "Debes ingresar ambos valores";
    return;
  }

  let numeroA = parseInt(a);
  let numeroB = parseInt(b);
  let suma = numeroA + numeroB;

  rdo.textContent = "La suma es " + suma;
});
