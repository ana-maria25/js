// Ejercicio 5A — Validación simple

// Consigna:
// Agregar/modificar el JS para que:

// El nombre de usuario tenga entre 6 y 8 caracteres, si no → mostrar mensaje debajo.

// La contraseña tenga al menos 10 caracteres.

// Mostrar todos los mensajes de error en sus <p class="error">.

// Si todo es válido, mostrar un alert de "Registro exitoso".

document.getElementById("registrar").addEventListener("click", function () {
  const usuario = document.getElementById("user");
  const contrasenia = document.getElementById("pass");
  const errorUsuario = document.getElementById("errorUser");
  const errorContrasenia = document.getElementById("errorPass");

  let valido = true;
  // limpiar mensajes anteriores
  errorUsuario.textContent = "";
  errorContrasenia.textContent = "";

  if (!(usuario.value.length >= 6 && usuario.value.length <= 8)) {
    errorUsuario.textContent = "el usuario debe ser de entre 6 y 8 caracteres";
    errorUsuario.style.color = "red";
    valido = false;
  }

  if (!(contrasenia.value.length >= 10)) {
    errorContrasenia.textContent =
      "la contraseña debe tener al menos 10 caracteres";
    errorContrasenia.style.color = "red";
    valido = false;
  }

  if (valido) {
    alert("Registro exitoso");
  }
});
