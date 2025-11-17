// Ejercicio 3B — Render dinámico + popup

// Consigna:
// Completar el JS para:

// Renderizar automáticamente una cuadrícula N×M con los países incluidos en el array paises.

// Al hacer click en un país, mostrar un alert() con su bandera + nombre.

// El campo de búsqueda debe filtrar la cuadrícula dinámicamente.

//1-Tenemos objetos de JavaScript (datos)
// Estos NO son elementos del DOM.
// Son solo datos en memoria.
const paises = [
  { nombre: "Argentina", bandera: "🇦🇷" },
  { nombre: "Chile", bandera: "🇨🇱" },
  { nombre: "Francia", bandera: "🇫🇷" },
  { nombre: "México", bandera: "🇲🇽" },
];

const contenedor = document.getElementById("contenedor");

//2-render dinamino

paises.forEach(function (pais) {
  //Con JS, creamos elementos html dinamicamente
  //Acá estás generando un <div> que NO existía en el HTML original.
  const celda = document.createElement("div");
  celda.classList.add("pais");

  //contenido interno
  //Insertamos en ese div la info de los objetos
  //Tomás datos del array
  // Y los transformás en elementos HTML visibles
  // Esto se llama render dinámico.
  celda.innerHTML = `<span class="bandera"> ${pais.bandera}</span>
  <span class="nombre"> ${pais.nombre}</span>
  `;

  // importante: agregar el nombre como data-attribute
  //Guardamos el nombre dentro del elemento HTML usando dataset
  celda.dataset.nombre = pais.nombre;

  // 3-agregar celda al contenedor
  //Agregamos ese HTML al DOM
  //Ahora el <div> ya forma parte real de la página.
  contenedor.appendChild(celda);

  // 3-evento click + popup
  //   Como el elemento existe en el DOM y fue creado por vos, ahora sí se le puede poner:
  // ✔️ eventos
  // ✔️ estilos
  // ✔️ filtros
  // ✔️ interactividad

  //Le ponemos un evento click al elemento recién creado
  celda.addEventListener("click", function () {
    alert("Pais: " + pais.nombre + "\nBandera: " + pais.bandera);
  });
});

// 4-filtro dinamico
document.getElementById("filtro").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const celdas = document.querySelectorAll(".pais");

  celdas.forEach(function (celda) {
    const nombre = celda.dataset.nombre.toLowerCase();

    if (nombre.includes(texto)) {
      celda.style.display = "block";
    } else {
      celda.style.display = "none";
    }
  });
});
