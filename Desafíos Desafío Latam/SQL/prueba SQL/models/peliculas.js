import { db } from "../src/database.js";
import Sequelize from "sequelize";

export const peliculas = db.define("peliculas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  año: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});