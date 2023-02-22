const { Router } = require('express');
const {allComps} = require("../controllers/components.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const componentsRoutes= require("./ComponentsRoutes.js");

const router = Router();
router.use("/components", componentsRoutes)

module.exports = router;
