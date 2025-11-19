// document.getElementById("btnPromedio").addEventListener("click", function () {
//     const n1 = document.getElementById("nota1").value;
//     const n2 = document.getElementById("nota2").value;
//     const n3 = document.getElementById("nota3").value;
//     const resultado = document.getElementById("resultadoPromedio");

//     // COMPLETAR:
//     // - Validar que n1, n2 y n3 estén ingresadas (no vacías)
//     if (n1 == "" || n2 == "" || n3 =="" || n1 <=0 || n2 <=0 || n3 <=0){
//         resultado.textContent="Ingresar numeros mayores a 0"
//     }else{
//         const promedio = (Number(n1)+Number(n2)+Number(n3))/3;
//         resultado.textContent ="El promedio es: " + promedio.toFixed(2);
//     }
//
// });

//  - Validar que sean mayores a 0
//  - Si todo está ok, calcular y mostrar el promedio
//  -Si algo está mal, mostrar el mensaje: "Todos los valores deben ser mayores a 0"
document.getElementById("btnPromedio").addEventListener("click", function () {
  const input1 = document.getElementById("nota1").value.trim();
  const input2 = document.getElementById("nota2").value.trim();
  const input3 = document.getElementById("nota3").value.trim();
  const rdo = document.getElementById("resultadoPromedio");

  if (input1 === "" || input2 === "" || input3 === "") {
    rdo.textContent = "Se deben ingresar todos valores";
    return;
  }

  let numero1 = Number(input1);
  let numero2 = Number(input2);
  let numero3 = Number(input3);

  if (numero1 === 0 || numero2 === 0 || numero3 === 0) {
    rdo.textContent = "Todos los numeros ingresador deben ser mayores a 0";
  }

  let suma = numero1 + numero2 + numero3;
  let promedio = suma / 3;
  rdo.textContent = "El promedio de " + suma + " es " + promedio;
});
