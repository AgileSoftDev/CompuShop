const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const componentsRoutes= require("./ComponentsRoutes.js");
const reviewRoutes= require("./reviewRoutes.js");

const router = Router();
router.use("/components", componentsRoutes)
router.use("/reviews", reviewRoutes)

module.exports = router;