import { db } from "../src/database.js";
import Sequelize from "sequelize";

export const tags = db.define("tags", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  tag: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});