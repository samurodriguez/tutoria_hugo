const { getPool } = require("../db/getPool");

async function insertImage(description, ruta) {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO imagenes (description, ruta) VALUES (?, ?)",
    [description, ruta]
  );

  return insertId;
}

async function selectImages() {
  const pool = getPool();

  const [images] = await pool.query("SELECT * FROM imagenes");

  return images;
}

module.exports = { insertImage, selectImages };
