import { peliculas, tags, peliculas_tags } from "../models/index.js";
import { db } from "../src/database.js";

async function mostrarPeliculas() {
  try {
    await db.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");

    const listaPeliculas = await peliculas.findAll();
    console.log("Películas:", listaPeliculas.map(p => p.toJSON()));

    const listaTags = await tags.findAll();
    console.log("Tags:", listaTags.map(t => t.toJSON()));

    // Si quieres realizar más consultas o cerrar la conexión más tarde, puedes hacerlo después de más operaciones
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

mostrarPeliculas();
