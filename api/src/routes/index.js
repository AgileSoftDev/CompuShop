const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const componentsRoutes= require("./ComponentsRoutes.js");

const router = Router();
router.use("/components", componentsRoutes)

module.exports = router;