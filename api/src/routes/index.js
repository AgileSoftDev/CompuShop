const { Router } = require('express');
const {allComps,
       findComp,
       findById,
       findByType} = require("../controllers/getComponents.js")

const {allUsers, findUser, verifyEmail} = require("../controllers/getUser.js")
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
        return res.status(400).send(error)
    }
})

router.get("/components/id/:id", async(req, res)=>{
    try {
        return res.status(200).send(await findById(req.params.id))
    } catch (error) {
        return res.status(400).send(error)
    }
})

 router.get("/components/:type", async(req, res)=>{
     try {
        return res.status(200).send(await findByType(req.params.type))
     } catch (error) {
        return res.status(400).send(error)
     }
})

router.get("/users", async (req, res) =>{
    try {
        if(req.query.name){
            const compSearch = await findUser(req.query.name)
            if(!compSearch[0]){
                return res.status(400).send({error:"No user with that name"})
            }else{
                return res.status(200).send(compSearch)
            }
        }
        return res.status(200).send(await allUsers())
    } catch (error) {
        return res.status(400).send(error)
    }
})
router.get("/users/:mail", async (req, res) =>{
    try {
        return res.status(200).send(await verifyEmail(req.params.mail))
     } catch (error) {
         return res.status(400).send(error)
     }
})



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
