const { Router } = require('express');
const {allComps, findComp, findByType} = require("../controllers/getComponents.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/components", async (req, res) =>{
    const {name}= req.query;
    try {
        if(name){
            const compSearch = await findComp(name)
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

router.get("/components/:type", async(req, res)=>{
    const {type}= req.params;
    try {
        if(type){
            const allComp= await findByType(type);
            if(!allComp[0]){
                return res.status(404).send(`${type} is not found`)
            }else{
                res.status(200).send(allComp)
            }
        }
        return res.status(200).send(allComps)
    } catch (error) {
        return error
    }
})


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;