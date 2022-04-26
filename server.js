require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

const { SERVER_PORT } = process.env;

const { getImages, postImage } = require("./controllers/images");

app.use(express.json());
app.use(fileUpload());
app.use(express.static("uploads"));

app.get("/images", getImages);

app.post("/images", postImage);

app.listen(SERVER_PORT, () => {
  console.log(`Servidor funcionando en el puerto ${SERVER_PORT}...`);
});
