const { Router } = require('express');
const {allComps} = require("../controllers/component/components.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRoutes= require("./userRoutes.js")
const componentsRoutes= require("./ComponentsRoutes.js");
const reviewRoutes= require("./reviewRoutes.js");

const router = Router();
router.use("/components", componentsRoutes)
router.use("/users", userRoutes)
router.use("/components", reviewRoutes)

module.exports = router;
