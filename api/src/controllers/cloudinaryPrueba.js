// const multer = require('multer');
const { Router }= require("express");
const upload = require('../cloudinaryConfig/multerConfig');
// const upload = multer({ dest: 'uploadsCloudinary2222/' }); // carpeta donde se guardará temporalmente la imagen subida
const cloudinary = require("../cloudinaryConfig/cloudinary.js")
const uploadRoutes= Router();
exports.subirImagen = (req, res) => {
  cloudinary.uploader.upload(req.file.path, (error, resultado) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al subir la imagen' });
    } else {
      res.status(200).json(resultado);
    }
  });
};

uploadRoutes.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send('Archivo cargado con éxito!');
});

module.exports= uploadRoutes