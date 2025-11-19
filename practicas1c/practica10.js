// document.querySelector("button").addEventListener("click", function () {
//     const palabra = document.getElementById("palabra").value;
//     const invertida = document.getElementById("invertida");

//     if (palabra === ""){
//         invertida.textContent =  "Ingresá una palabra";
//     }else{
//         const resultado = palabra.split("").reverse().join("");
//         invertida.textContent ="Palabra invertida: " + resultado;
//     }
//     // COMPLETÁ:
//     // Si el input está vacío, mostrar "Ingresá una palabra"
//     // Si hay palabra, invertirla y mostrarla. Ej: "casa" → "asac"
// });

// COMPLETÁ:
// Si el input está vacío, mostrar "Ingresá una palabra"
// Si hay palabra, invertirla y mostrarla. Ej: "casa" → "asac"

document.querySelector("button").addEventListener("click", function () {
  const input = document.getElementById("palabra").value.trim();

  const rdo = document.getElementById("invertida");

  if (input === "") {
    rdo.textContent = "Ingresa una palabra";
    return;
  }

  let palabraInvertida = input.split("").reverse().join("");

  rdo.textContent = "La palabra invertida es: " + palabraInvertida;
});
