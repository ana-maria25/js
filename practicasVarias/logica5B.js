// Ejercicio 5B — Validación completa + repetir contraseña
// Consigna:
// Completar el JS para:
// Usuario entre 6 y 8 caracteres.
// Contraseña:
// 10 caracteres
// al menos 1 letra
// al menos 1 número
// al menos 1 especial de: * | _ | ( | / | )
// Repetir contraseña debe coincidir.
// Botón “Cancelar” → limpia el formulario.
// Si todo está OK → mostrar “Bienvenido <usuario>”.
const usuario = document.getElementById("user");
const contraseniaUno = document.getElementById("pass1");
const contraseniaDos = document.getElementById("pass2");

const errorUsuario = document.getElementById("errUser");
const errorContraseniaUno = document.getElementById("errPass1");
const errorContraseniaDos = document.getElementById("errPass2");

const mensaje = document.getElementById("mensaje");
const btnRegistrar = document.getElementById("btnRegistrar");
const btnCancelar = document.getElementById("btnCancelar");

document.getElementById("btnRegistrar").addEventListener("click", function () {
  let valido = true;

  //limpia errores
  errorUsuario.textContent = "";
  errorContraseniaUno.textContent = "";
  errorContraseniaDos.textContent = "";
  mensaje.textContent = "";

  if (!(usuario.value.length >= 6 && usuario.value.length <= 8)) {
    errorUsuario.textContent = "el usuario debe ser de entre 6 y 8 caracteres";
    errorUsuario.style.color = "red";
    valido = false;
  }

  //VALIDAR CONTRASEÑA

  const tieneLetra = /[a-zA-Z]/.test(contraseniaUno.value);
  const tieneNumero = /[0-9]/.test(contraseniaUno.value);
  // acepta: * | _ ( / )
  const tieneEspecial = /[\*\|_\(\/\)]/.test(contraseniaUno.value);

  if (!(contraseniaUno.value.length === 10)) {
    errorContraseniaUno.textContent = "la contraseña debe tener 10 caracteres";
    errorContraseniaUno.style.color = "red";
    valido = false;
  } else if (!tieneLetra || !tieneNumero || !tieneEspecial) {
    errorContraseniaUno.textContent =
      "La contraseña debe tener al menos 1 letra, 1 número y 1 carácter especial (* | _ | ( | / ).";
    errorContraseniaUno.style.color = "red";
    valido = false;
  }

  //validar repetir contraseña
  if (contraseniaUno.value !== contraseniaDos.value) {
    errorContraseniaDos.textContent = "las contraseñas no coinciden";
    errorContraseniaDos.style.color = "red";
    valido = false;
  }

  if (valido) {
    mensaje.textContent = "Bienvenido " + usuario.value;
    mensaje.style.color = "green";
  }
});

document.getElementById("btnCancelar").addEventListener("click", function () {
  usuario.value = "";
  contraseniaUno.value = "";
  contraseniaDos.value = "";

  errorUsuario.textContent = "";
  errorContraseniaUno.textContent = "";
  errorContraseniaDos.textContent = "";
  mensaje.textContent = "";
});
