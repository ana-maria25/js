// document.querySelector("button").addEventListener("click", function () {
//     const color = document.getElementById("colores").value;
//     const caja = document.getElementById("caja");
//     const mensaje = document.getElementById("mensaje");

//     if (color === ""){
//         mensaje.textContent = "Elegí un color";
//         caja.style.backgroundColor ="";
//     } else{
//         caja.style.backgroundColor = color;
//         mensaje.textContent = "Color aplicado";
//     }
//     // COMPLETÁ:
//     // 1. Si no se eligió nada → mostrar un alert: "Elegí un color"
//     // 2. Si se eligió → cambiar color de fondo de la caja con style.backgroundColor
// });

// COMPLETÁ:
// 1. Si no se eligió nada → mostrar un alert: "Elegí un color"
// 2. Si se eligió → cambiar color de fondo de la caja con style.backgroundColor

document.querySelector("button").addEventListener("click", function () {
  const color = document.getElementById("colores").value;
  const caja = document.getElementById("caja");
  const mensaje = document.getElementById("mensaje");

  if (color === "") {
    mensaje.textContent = "Elegi un color";
    // caja.style.background = "";
  } else {
    caja.style.background = color;
    mensaje.textContent = "color aplicado";
  }
});
