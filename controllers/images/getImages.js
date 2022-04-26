const { selectImages } = require("../../repositories/imagesRepository");

async function getImages(req, res) {
  const images = await selectImages();

  res.send(images);
}

module.exports = { getImages };
