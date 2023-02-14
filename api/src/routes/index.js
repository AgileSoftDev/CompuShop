const { Router } = require('express');
const {allComps, findComp} = require("../controllers/components.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/components", async (req, res) =>{
    try {
        if(req.query.name){
            const compSearch = await findComp(req.query.name)
            if(!compSearch[0]){
                return res.status(400).send({error:"No such component found"})
            }else{
                return res.status(200).send(compSearch)
            }
        }
        return res.status(200).send(await allComps())
    } catch (error) {
        return error
    }
})



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
