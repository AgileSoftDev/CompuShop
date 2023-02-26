const { Router } = require('express');
const {allComps} = require("../controllers/components.js")
const upload = require('../cloudinaryConfig/multerConfig.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const componentsRoutes= require("./ComponentsRoutes.js");
// const controlador = require('../controllers/cloudinaryPrueba');
// const upload = require("../controllers/cloudinaryPrueba")
const uploadRoutes= require("../controllers/cloudinaryPrueba.js")
const router = Router();
router.use("/components", componentsRoutes)
router.use("/upload", uploadRoutes)
// router.post('/subir-imagen', upload.single('imagen'), controlador.subirImagen);

module.exports = router;