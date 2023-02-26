const multer = require('multer');
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, img, cb) => {
    cb(null, img.originalname)
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, img, cb) => {
    if (img.mimetype === 'image/jpeg' || img.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('El archivo debe ser una imagen JPEG o PNG.'));
    }
  }
});

