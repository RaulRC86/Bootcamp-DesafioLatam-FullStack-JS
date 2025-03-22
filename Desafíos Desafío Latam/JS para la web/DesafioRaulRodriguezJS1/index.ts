function sumar(): void {
    const cantidadElement = document.querySelector<HTMLSpanElement>(".cantidad");
    const precioInicialElement = document.querySelector<HTMLSpanElement>(".precio-inicial");
    const totalElement = document.querySelector<HTMLSpanElement>(".valor-total");

    if (cantidadElement && precioInicialElement && totalElement) {
        let cuenta: number = Number(cantidadElement.textContent);
        cuenta += 1;
        cantidadElement.textContent = cuenta.toString();

        const precio: number = Number(precioInicialElement.textContent);
        const total: number = cuenta * precio;
        totalElement.textContent = total.toString();
    } else {
        console.error("No se encontraron los elementos necesarios en el DOM.");
    }
}

function restar(): void {
    const cantidadElement = document.querySelector<HTMLSpanElement>(".cantidad");
    const precioInicialElement = document.querySelector<HTMLSpanElement>(".precio-inicial");
    const totalElement = document.querySelector<HTMLSpanElement>(".valor-total");

    if (cantidadElement && precioInicialElement && totalElement) {
        let cuenta: number = Number(cantidadElement.textContent);
        cuenta = Math.max(0, cuenta - 1);
        cantidadElement.textContent = cuenta.toString();

        const precio: number = Number(precioInicialElement.textContent);
        const total: number = cuenta * precio;
        totalElement.textContent = total.toString();
    } else {
        console.error("No se encontraron los elementos necesarios en el DOM.");
    }
}

const sumarBtn = document.querySelector<HTMLButtonElement>(".sumar");
const restarBtn = document.querySelector<HTMLButtonElement>(".restar");

if (sumarBtn) {
    sumarBtn.addEventListener("click", sumar);
}

if (restarBtn) {
    restarBtn.addEventListener("click", restar);
}
