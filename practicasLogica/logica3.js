// 🟨 EJERCICIO 3 — Filtro de productos (forEach obligatorio)
// Consigna:

// Hay un array:
// const productos = [
//   { nombre: "Mouse", precio: 5000 },
//   { nombre: "Teclado", precio: 8000 },
//   { nombre: "Monitor", precio: 30000 }
// ];

// Hay un input <input id="filtro">
// Hay un contenedor <div id="lista"></div>
// Cada vez que el usuario escribe en el input, debe filtrarse por nombre y mostrarse solo los productos que coincidan.

// Ejemplo:
// Escribe "mo" → muestra Mouse y Monitor
// Escribe "t" → Teclado
// Escribe "" → muestra todos

// Requerimientos:
// Render dinámico con forEach
// Limpiar el contenedor antes de volver a renderizar
// No usar innerHTML acumulado (sino reemplazo completo)

//Tenemos objetos de JavaScript (datos)
// Estos NO son elementos del DOM.
// Son solo datos en memoria.

const productos = [
  { nombre: "Mouse", precio: 5000 },
  { nombre: "Teclado", precio: 8000 },
  { nombre: "Monitor", precio: 30000 },
];

const contenedor = document.getElementById("lista");
const input = document.getElementById("filtro");

// ------ RENDER INICIAL (sin función) ------
contenedor.innerHTML = ""; // limpio todo

productos.forEach(function (producto) {
  const celda = document.createElement("div");
  celda.classList.add("item");

  celda.innerHTML = `
    <span>${producto.nombre}</span>
    <span>$${producto.precio}</span>
  `;

  celda.addEventListener("click", function () {
    alert("Producto: " + producto.nombre + " - $" + producto.precio);
  });

  contenedor.appendChild(celda);
});

// ------ FILTRO DINÁMICO ------
input.addEventListener("input", function () {
  const texto = input.value.toLowerCase();

  // limpiar contenedor ANTES DE VOLVER A RENDERIZAR
  contenedor.innerHTML = "";

  // filtrar los productos
  const filtrados = productos.filter(function (p) {
    return p.nombre.toLowerCase().includes(texto);
  });

  // volver a crear el HTML (sin función)
  filtrados.forEach(function (producto) {
    const celda = document.createElement("div");
    celda.classList.add("item");

    celda.innerHTML = `
      <span>${producto.nombre}</span>
      <span>$${producto.precio}</span>
    `;

    celda.addEventListener("click", function () {
      alert("Producto: " + producto.nombre + " - $" + producto.precio);
    });

    contenedor.appendChild(celda);
  });
});
