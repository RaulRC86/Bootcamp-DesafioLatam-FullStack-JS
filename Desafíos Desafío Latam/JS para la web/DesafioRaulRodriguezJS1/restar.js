export function restar() {
    let cantidad = document.querySelector(".cantidad");
    let cuenta = Number(cantidad.innerHTML);
    cuenta = Math.max (0, cuenta - 1);
    cantidad.innerHTML = cuenta;
  
    let precio = 400000;
    let totalSpan = document.querySelector(".valor-total");
    let total = precio * cuenta;
    totalSpan.innerHTML = total;
  }
   