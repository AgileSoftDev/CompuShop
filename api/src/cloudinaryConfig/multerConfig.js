// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: (req, img, cb) => {
//     cb(null, img.originalname)
//   }
// });
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
//   fileFilter: (req, img, cb) => {
//     if (img.mimetype === 'image/jpeg' || img.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(new Error('El archivo debe ser una imagen JPEG o PNG.'));
//     }
//   }
// });


// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '/uploads/')); // se guarda en la carpeta "uploads" en el directorio principal
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage });
