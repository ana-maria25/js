// document.querySelector("button").addEventListener("click", function () {
//     const pass1 = document.getElementById("pass1").value;
//     const pass2 = document.getElementById("pass2").value;
//     const mensaje = document.getElementById("mensaje");

//     if (pass1 === "" || pass2 === ""){
//         mensaje.textContent = "Debés completar ambos campos";
//     }else if(pass1.length < 6){
//         mensaje.textContent= "La contraseña debe tener al menos 6 caracteres";
//     }else if(pass1 !== pass2){
//         mensaje.textContent = "Las contraseñas no coinciden";
//     }else{
//         mensaje.textContent = "Contraseña válida ✅";
//     };
// });

// COMPLETÁ:
// 1. Si alguno está vacío → "Debés completar ambos campos"
// 2. Si tienen menos de 6 caracteres → "La contraseña debe tener al menos 6 caracteres"
// 3. Si no coinciden → "Las contraseñas no coinciden"
// 4. Si todo está bien → "Contraseña válida ✅"

document.querySelector("button").addEventListener("click", function () {
  const contrasenia = document.getElementById("pass1").value.trim();
  const contraseniaDos = document.getElementById("pass2").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (contrasenia === "" || contraseniaDos === "") {
    mensaje.textContent = "Debés completar ambos campos";
  } else if (contrasenia.length < 6) {
    mensaje.textContent = "La contraseña debe tener al menos 6 caracteres ";
  } else if (contrasenia !== contraseniaDos) {
    mensaje.textContent = "Las contraseñas no coinciden";
  } else {
    mensaje.textContent = "La contraseña es valida";
  }
});
