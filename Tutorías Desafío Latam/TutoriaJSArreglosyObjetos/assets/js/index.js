export const mostrarLibros = (Arraylibros, contenedorId) => {
    const container = document.getElementById(contenedorId);

    let count = 0;

    for (const libro of Arraylibros) {
        if (count < 3) {
            const card = document.createElement("div");
            card.classList.add("libro-card");
            card.innerHTML = `
          <h3>Titulo: ${libro.nombre}</h3>
          <img src="${libro.src}" alt="Imagen del libro" />
          <p>descripcion: ${libro.descripcion}</p>
          <p>Costo: $${libro.costo}</p>
          <p>Libro: ${libro.infantiles ? "Apto para niños" : "Solo para adultos"}</p>
        `;
            container.appendChild(card);
            count++;
        } else {
            return
        }
    }
};
