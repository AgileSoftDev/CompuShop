const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const { Router }= require("express");
// const cloudinary = require("../cloudinaryConfig/cloudinary.js")
const mime= require( "mime-types" )
const createComponent= require("../controllers/component/createComponents")
const uploadRoutes= Router();
// const path = require('path');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dhwyjetxl",
  api_key: "195214223213211",
  api_secret: "8vbCgWu90HVms1DRB6ibl0Gfnao"
});

const subirImagen = (file) => {
  const ext = path.extname(file.originalname);
  const nombreArchivo = path.basename(file.originalname, ext);
  file.originalname = nombreArchivo + '-' + Date.now() + ext;

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error, resultado) => {
      if (error) {
        console.error(error);
        reject('Error al subir la imagen');
      } else {
        resolve(resultado);
      }
    });
  });
};
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  // folder: 'uploads',
  allowedFormats: ['jpg', 'jpeg', 'png', 'webp'],
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

uploadRoutes.post('/', upload.single('img'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, async(error, result) => {
    // console.log(req.file.path);
    // console.log(req.file);

    const result2= result
    if (error) {
      // console.error(error);
      res.status(500).send('Error al subir archivo a Cloudinary');
    } else {
      // console.log(result2);
      const newObject= {
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
        description:req.body.description,
        img:result2.url,
        description_2:req.body.description_2,
        description_3:req.body.description_3,
        description_4:req.body.description_4,
        stock:req.body.stock,
        quantityStock:req.body.quantityStock
    }

    const result= await createComponent(newObject);
    res.status(201).send(result)
    }
  });
});

uploadRoutes.post('/subir-imagen', upload.single('img'), (req, res) => {

  // Subir la imagen a Cloudinary
  cloudinary.uploader.upload(req.file.path, async(err, result) => {
    const result2= result
    if (err) {
      console.log('Error al subir la imagen:', err);
      res.status(500).json({ mensaje: 'Error al subir la imagen' });
    } else {
      // La imagen se ha subido correctamente, guardar la URL en la base de datos o en otra ubicación
      const url = result2.secure_url;
      // console.log('Imagen subida correctamente:', url);
      res.json({ mensaje: 'Imagen subida correctamente', url: url });
    }
  });
});

module.exports = uploadRoutes;