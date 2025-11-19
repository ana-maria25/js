// document.getElementById("btnSaludo").addEventListener("click", function () {
//     const hora = Number(document.getElementById("hora").value);
//     const resultado = document.getElementById("resultadoSaludo");

//     if (isNaN(hora) || hora < 0 || hora > 23) {
//         resultado.textContent = "Ingresar una hora válida (0 a 23)";
//     } else if (hora >= 6 && hora <= 12) {
//         resultado.textContent = "Buenos días";
//     } else if (hora >= 13 && hora <= 20) {
//         resultado.textContent = "Buenas tardes";
//     } else {
//         resultado.textContent = "Buenas noches";
//     }

// });

// COMPLETAR:
// - Validar que la hora esté entre 0 y 23
// - Mostrar saludo correspondiente según rango horario
// - Si es inválida, mostrar: "Ingresar una hora válida (0 a 23)"

document.getElementById("btnSaludo").addEventListener("click", function () {
  const input = document.getElementById("hora").value.trim();
  const rdo = document.getElementById("resultadoSaludo");

  if (input === "") {
    rdo.textContent = "Ingresar una hora";
    return;
  }

  let hora = Number(input);

  if (hora >= 0 && hora <= 23) {
    if (hora >= 6 && hora <= 12) {
      rdo.textContent = "Buenos dias";
    } else if (hora >= 13 && hora <= 20) {
      rdo.textContent = "Buenas tardes";
    } else {
      rdo.textContent = "Buenas noches";
    }
  } else {
    rdo.textContent = "Ingresar una hora válida (0 a 23)";
  }
});
