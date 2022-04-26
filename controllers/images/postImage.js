const { insertImage } = require("../../repositories/imagesRepository");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const { SERVER_HOST, SERVER_PORT } = process.env;

async function postImage(req, res) {
  const { description } = req.body;
  const { imagen } = req.files;

  const imagenSharp = await sharp(imagen.data);

  const imageName = `${uuidv4()}-${imagen.name}`;
  const imageURL = `http://${SERVER_HOST}:${SERVER_PORT}/${imageName}`;

  imagenSharp.toFile(path.resolve(__dirname, "../../uploads", imageName));

  const insertId = await insertImage(description, imageURL);

  res.send({
    id: insertId,
    ruta: imageURL,
    description,
  });
}

module.exports = { postImage };
