const boton1 = document.getElementById("button1");

boton1.addEventListener("click", function (e) {
    const valor = document.getElementById("input1").value;
    const titulo = document.querySelector(".titulo");
    titulo.innerHTML = valor;
});
