import { db } from "../src/database.js";
import { peliculas } from "./peliculas.js";
import { tags } from "./tags.js";
import { peliculas_tags } from "./peliculas_tags.js";
import "./associations.js"; 

export { db, peliculas, tags, peliculas_tags };

db.sync({ force: true }) 
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.error("Error al sincronizar la base de datos:", error));
