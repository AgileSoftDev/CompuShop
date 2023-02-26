// const multer = require('multer');
// const { Router }= require("express");
// const cloudinary = require("../cloudinaryConfig/cloudinary.js")
// const componentsRoutes= require("../routes/ComponentsRoutes")
// const mime= require( "mime-types" )
// const uploadRoutes= Router();
// const path = require('path');


// const subirImagen = (req, res) => {
//     const ext = path.extname(req.img.originalname);
// const nombreArchivo = path.basename(req.img.originalname, ext);
// req.img.originalname = nombreArchivo + '-' + Date.now() + ext;

//   cloudinary.uploader.upload(req.img.path, (error, resultado) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Error al subir la imagen' });
//     } else {
//       res.status(200).json(resultado);
//     }
//   });
// };


// ////////////////Post de la imagen y almacenamiento local////////////////////////////////////
// const storage = multer.diskStorage({
//     destination: path.join(__dirname, '../public/uploads'),
//     filename: (req, img, cb) => {
//       const originalname = img.originalname;
//       const ext = path.extname(originalname);
//       const mimeType = mime.lookup(ext);
//       const newExt = mimeType ? '.' + mime.extension(mimeType) : '';
//       const newName = path.basename(originalname, ext);
//       cb(null, newName + newExt);
//     }
//   });
  
//   const upload = multer({ storage: storage });
//   uploadRoutes.post('/', upload.single('img'), function (req, res) {
//       //////////////servicio///////////////
//     console.log(req.img, req.body);
//     res.send('Archivo cargado con éxito!');
//   });

//   uploadRoutes.post('/subir-imagen', upload.single('img'), async (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No se ha subido ningún archivo' });
//     }
  
//     try {
//       const resultado = await subirImagen(req.file);
//       res.status(200).json(resultado);
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   });

//   componentsRoutes.post("/", upload.single('img'), async(req, res) => {
//       const { name } = req.body;
//       const img = req.file
//       console.log(req.file)
//       cloudinary.uploader.upload_stream({ resource_type: 'auto' },
//       (error, result) => {
//           if (error) {
//             console.error(error);
//             res.status(500).send('Error al subir archivo a Cloudinary');
//           } else {
//             // Aquí puedes hacer lo que quieras con los datos
//             console.log('Nombre: ', name);
//             console.log('URL del archivo en Cloudinary: ', result.url);
    
//             res.send('¡Datos del formulario recibidos y archivo subido a Cloudinary!');
//           }
//       })
//       .end(img.buffer);
//   })
  
// module.exports= uploadRoutes


const multer = require('multer');
const { Router }= require("express");
const cloudinary = require("../cloudinaryConfig/cloudinary.js")
const componentsRoutes= require("../routes/ComponentsRoutes")
const mime= require( "mime-types" )
const createComponent= require("./createComponents")
const uploadRoutes= Router();
const path = require('path');


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


////////////////Post de la imagen y almacenamiento local////////////////////////////////////
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, cb) => {
    const originalname = file.originalname;
    const ext = path.extname(originalname);
    const mimeType = mime.lookup(ext);
    const newExt = mimeType ? '.' + mime.extension(mimeType) : '';
    const newName = path.basename(originalname, ext);
    cb(null, newName + newExt);
  }
});

const upload = multer({ storage: storage });

uploadRoutes.post('/', upload.single('img'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, async(error, result) => {
    const result2= result
    if (error) {
      console.error(error);
      res.status(500).send('Error al subir archivo a Cloudinary');
    } else {
      console.log(result2);
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

module.exports = uploadRoutes;
