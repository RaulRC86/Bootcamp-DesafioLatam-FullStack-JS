import { librosEnCamino } from './libros.js'


export const enCamino = (libros) => {
    const container = document.getElementById("containerLibros");


    for (const libro of libros) {
        const card = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = `Titulo: ${libro.nombre}`

        const image = document.createElement("img");
        image.src = libro.src;
        image.alt = "Imagen del libro";

        const description = document.createElement("p");
        description.textContent = `Descripcion: ${libro.descripcion}`

        const cost = document.createElement("p");
        cost.textContent = `Costo: $${libro.costo}`;

        const infantilStatus = document.createElement("p");
        infantilStatus.textContent = `Libros: ${libro.infantiles ? "Apto para niños" : "Solo para adultos"}`

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(cost);
        card.appendChild(infantilStatus);

        container.appendChild(card);
    }
};

enCamino(librosEnCamino);
