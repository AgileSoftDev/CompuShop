const { Router }= require("express");
const {allComps, findComp, findByCategory, findById} = require("../controllers/getComponents.js");
const createComponent = require('./../controllers/createComponents.js');
const deleteComponent = require('./../controllers/deleteComponent.js');
const updateComponents = require('./../controllers/updateComponents.js')


const componentsRoutes= Router();

componentsRoutes.get("/", async (req, res) =>{
    const {name}= req.query;
    try {
        if(name){
            const compSearch = await findComp(name)
            if(!compSearch){ //preguntarle a Ivan si es necesario el [0] o no
                return res.status(400).send({error:"No such component found"})
            }else{
                return res.status(200).send(compSearch)
            }
        }
        return res.status(200).send(await allComps())
    } catch (error) {
        return error
    }
});

componentsRoutes.get("/:category", async(req, res)=>{
    const {category}= req.params;
    try {
        if(category){
            const allComp= await findByCategory(category);
            if(!allComp){
                return res.status(404).send(`${category} is not a category`)
            }else{
                res.status(200).send(allComp)
            }
        }
    } catch (error) {
        return error
    }
});

componentsRoutes.get("/id/:id", async(req, res)=>{
    const {id}= req.params
    try {
        return res.status(200).send(await findById(id))
    } catch (error) {
        return error
    }
})

componentsRoutes.post("/", async(req, res)=>{
    try {
        res.status(201).send(await createComponent(req.body));
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})

componentsRoutes.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await deleteComponent(id);
        res.status(201).send({status: 'Registro eliminado con éxito'});
    } catch (error) {
        res.status(404).send({error});
    }
})

componentsRoutes.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        res.status(204).send(await updateComponents(id, data))
    } catch (error) {
        res.status(404).send({error})
    }
})

module.exports= componentsRoutes;