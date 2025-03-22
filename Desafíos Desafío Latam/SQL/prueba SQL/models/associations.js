import { peliculas } from "./peliculas.js";
import { tags } from "./tags.js";
import { peliculas_tags } from "./peliculas_tags.js";

peliculas.belongsToMany(tags, { through: peliculas_tags });
tags.belongsToMany(peliculas, { through: peliculas_tags });

