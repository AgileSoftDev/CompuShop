const { Router } = require('express');
const {allComps} = require("../controllers/components.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/components", async (req, res) =>{
    try {
        return res.status(200).send(await allComps())
    } catch (error) {
        return error
    }
})



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
