//Agregar/modificar todo el codigo que crea necesario para:

//- Al dar click en el boton "Calcular potencia al 3" se debe mostrar el resultado de elevar el numero ingreso a cubo.
//- En caso de no haberse ingresado un numero, se debe ver el texto "Ingresar un numero para calcular"

document.getElementById("btn").addEventListener("click", function () {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");

  if (numero === "") {
    resultado.innerHTML = "Se debe ingresar un numero";
    return;
  }

  const potencia = numero * numero * numero;

  resultado.innerHTML = "La potencia al cubo de " + numero + " es " + potencia;
});
