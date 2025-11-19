// document.getElementById("btnVerificar").addEventListener("click", function () {
//     const nombre = document.getElementById("nombre").value.trim();
//     const resultado = document.getElementById("resultadoNombre");

//     if (nombre === ""){
//         resultado.textContent = "error, completar nombre"
//     }else{
//         const primeraLetra = nombre.charAt(0).toLowerCase();
//         const esVocal = ["a", "e", "i", "o", "u"].includes(primeraLetra);
//         if (esVocal){
//             resultado.textContent="la primera letra es vocal";
//         }else{
//             resultado.textContent="la primera letra no es vocal";
//         }
//     }
//     // COMPLETAR:
//     // - Si el campo está vacío, mostrar mensaje de error
//     // - Si empieza con vocal (a, e, i, o, u), mostrar: "Empieza con vocal"
//     // - Sino, mostrar: "No empieza con vocal"
// });

// COMPLETAR:
// - Si el campo está vacío, mostrar mensaje de error
// - Si empieza con vocal (a, e, i, o, u), mostrar: "Empieza con vocal"
// - Sino, mostrar: "No empieza con vocal"

document.getElementById("btnVerificar").addEventListener("click", function () {
  const input = document.getElementById("nombre").value.trim().toLowerCase();
  const rdo = document.getElementById("resultadoNombre");

  if (input === "") {
    rdo.textContent = "Ingresar palabra";
    return;
  }
  let primeraLetra = input.charAt(0);

  if (
    primeraLetra === "a" ||
    primeraLetra === "e" ||
    primeraLetra === "i" ||
    primeraLetra === "o" ||
    primeraLetra === "u"
  ) {
    rdo.textContent = "La palabra " + input + " empieza con vocal";
  } else {
    rdo.textContent = "La palabra " + input + " no empieza con vocal";
  }
});
