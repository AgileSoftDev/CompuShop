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
            res.status(201).send(await findComp(name))
        }
        else return res.status(201).send(await allComps())
    } catch (error) {
        res.status(404).send({error})
    }
});

componentsRoutes.get("/:category", async(req, res)=>{
    const {category}= req.params;
    try {
        res.status(201).send(await findByCategory(category));
    } catch (error) {
        res.status(404).send({error})
    }
});

componentsRoutes.get("/id/:id", async(req, res)=>{
    const {id}= req.params
    try {
        return res.status(200).send(await findById(id))
    } catch (error) {
        res.status(404).send({error})
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
        console.log("llegó la perición");
        const {id} = req.params;
        const data = req.body;
        res.status(204).send(await updateComponents(id, data))
    } catch (error) {
        res.status(404).send({error})
    }
})

module.exports= componentsRoutes;