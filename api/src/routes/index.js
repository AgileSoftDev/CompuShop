const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRoutes= require("./userRoutes.js")
const componentsRoutes= require("./ComponentsRoutes.js");
const reviewRoutes= require("./reviewRoutes.js");
const uploadRoutes= require("../controllers/cloudinaryPrueba.js");
const nodemailer = require('./nodemailer.js');

const router = Router();

router.use("/users", userRoutes)
router.use("/review", reviewRoutes)
// const controlador = require('../controllers/cloudinaryPrueba');
// const upload = require("../controllers/cloudinaryPrueba")
router.use("/components", componentsRoutes)
router.use("/upload", uploadRoutes)
router.use('/mailer', nodemailer);
// router.post('/subir-imagen', upload.single('imagen'), controlador.subirImagen);

module.exports = router;
