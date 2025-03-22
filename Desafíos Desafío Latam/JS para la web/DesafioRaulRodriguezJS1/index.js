function sumar() {
    var cantidadElement = document.querySelector(".cantidad");
    var precioInicialElement = document.querySelector(".precio-inicial");
    var totalElement = document.querySelector(".valor-total");
    if (cantidadElement && precioInicialElement && totalElement) {
        var cuenta = Number(cantidadElement.textContent);
        cuenta += 1;
        cantidadElement.textContent = cuenta.toString();
        var precio = Number(precioInicialElement.textContent);
        var total = cuenta * precio;
        totalElement.textContent = total.toString();
    }
    else {
        console.error("No se encontraron los elementos necesarios en el DOM.");
    }
}
function restar() {
    var cantidadElement = document.querySelector(".cantidad");
    var precioInicialElement = document.querySelector(".precio-inicial");
    var totalElement = document.querySelector(".valor-total");
    if (cantidadElement && precioInicialElement && totalElement) {
        var cuenta = Number(cantidadElement.textContent);
        cuenta = Math.max(0, cuenta - 1);
        cantidadElement.textContent = cuenta.toString();
        var precio = Number(precioInicialElement.textContent);
        var total = cuenta * precio;
        totalElement.textContent = total.toString();
    }
    else {
        console.error("No se encontraron los elementos necesarios en el DOM.");
    }
}
var sumarBtn = document.querySelector(".sumar");
var restarBtn = document.querySelector(".restar");
if (sumarBtn) {
    sumarBtn.addEventListener("click", sumar);
}
if (restarBtn) {
    restarBtn.addEventListener("click", restar);
}
