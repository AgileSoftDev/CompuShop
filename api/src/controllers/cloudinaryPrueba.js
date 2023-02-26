

const multer = require('multer');
const { Router }= require("express");
const cloudinary = require("../cloudinaryConfig/cloudinary.js")
const componentsRoutes= require("../routes/ComponentsRoutes")
const mime= require( "mime-types" )
const createComponent= require("./createComponents")
const { allComps, findComp}= require("./getComponents")
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

// componentsRoutes.get('/', upload.array('img'), async(req, res) => {
//   try {
//     const images = [];
//     console.log(images)
//     for (const file of req.files) {
//       const result = await cloudinary.uploader.upload(file.path);
//       images.push(result.secure_url);
//     }

//     const {name} = req.query;
//     if (name) {
//       const compSearch = await findComp(name);
//       if (!compSearch) { 
//         return res.status(400).send({error: "No such component found"});
//       }
//       compSearch.images = images;
//       return res.status(200).send(compSearch);
//     } else {
//       const comps = await allComps();
//       for (const comp of comps) {
//         comp.images = images.filter(image => image.includes(comp._id));
//       }
//       return res.status(200).send(comps);
//     }
//   } catch (error) {
//     return res.status(500).send({error: error.message});
//   }
// });

module.exports = uploadRoutes;
