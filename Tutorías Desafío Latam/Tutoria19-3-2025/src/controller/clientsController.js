import { db } from "../db/database.js";

export const agregarClientsController = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const query = "INSERT INTO clientes VALUES (DEFAULT, $1, $2)";
    const values = [nombre, email];
    const result = await db.query(query, values);

    res.status(201).json({ message: "Cliente creado", cliente: result.rows });
  } catch (error) {
    console.log(error.message);
  }
};

export const obtenerClientsController = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM clientes");
    res.status(200).json(rows);
  } catch (error) {
    console.log(error.message);
  }
};
