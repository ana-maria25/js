document.getElementById("numero1").addEventListener("input", function() {
    const numero1 = this.value;
    const resultado = numero1

    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;

});

document.getElementById("numero2").addEventListener("input", function() {
    const numero2 = this.value;
    const resultado = numero2
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
});


const btn=document.getElementById("btn").addEventListener("click", function() {

    if(!numero1 && !numero2){
        alert("se deben ingresar ambos numeros");
    }
});