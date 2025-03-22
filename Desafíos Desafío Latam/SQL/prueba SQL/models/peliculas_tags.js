import Sequelize from "sequelize";
import { db } from "../src/database.js";
import { peliculas } from "./peliculas.js";
import { tags } from "./tags.js";

export const peliculas_tags = db.define("peliculas_tags", {
    pelicula_id: {
        type: Sequelize.INTEGER,
        references: {
            model: peliculas,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
       
    },
  tag_id: {
    type: Sequelize.INTEGER,
    references: {
        model: tags,
        key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
});

