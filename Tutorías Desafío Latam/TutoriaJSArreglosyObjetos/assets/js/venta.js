
import { librosEnVenta, librosEnCamino } from './libros.js'


export const venta = (libros) => {
    const container = document.getElementById("containerLibros");

    let contenidoHTML = '';

    for (const venta of libros) {
        contenidoHTML += `
            <div>
                <h3>Titulo: ${venta.nombre}</h3>
                <img src="${venta.src}" alt="Imagen del libro" />
                <p>Descripcion: ${venta.descripcion}</p>
                <p>Costo: $${venta.costo}</p>
                <p>Libro: ${venta.infantiles ? "Apto para niños" : "Solo para adultos"}</p>
            </div>
        `;
    }

    container.innerHTML = contenidoHTML;
};

// venta(librosEnCamino);
venta(librosEnVenta);