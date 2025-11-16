// 🟩 EJERCICIO 3A — Resolvelo como si fuera el parcial
// ✔️ Consigna:

// Modificar/agregar el código necesario para:

//A. Al hacer click en un país, mostrar en el <p id="info"> su nombre y continente.

//1-seleccionamos las celdas,para luego recorrerlas
//esto no devuelve una especie de array:[ Argentina, Brasil, Japón, España ]
const celdas = document.querySelectorAll(".pais");

//2-Recorrer las celdas y agregarlas al click (forEach)
celdas.forEach(function (celda) {
  celda.addEventListener("click", function () {
    const info = celda.dataset.info;
    document.getElementById("info").innerText = info;
  });
});

//  B. El campo de búsqueda debe filtrar en tiempo real los países.
// . El filtro debe ignorar mayúsculas y minúsculas.
//.. Si el filtro está vacío → se muestran todos los países.

document.getElementById("buscador").addEventListener("input", function () {
  const texto = this.value.toLowerCase();

  celdas.forEach(function (celda) {
    const nombre = celda.dataset.nombre.toLowerCase();

    if (nombre.includes(texto)) {
      celda.style.display = "block";
    } else {
      celda.style.display = "none";
    }
  });
});
