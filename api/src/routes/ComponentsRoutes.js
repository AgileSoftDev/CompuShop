const { Router }= require("express");
const {allComps, findComp, findByCategory, findById, findStock} = require("./../controllers/component/getComponents.js");
const createComponent = require('./../controllers/component/createComponents.js');
const {deleteComponent, activateComponent} = require('./../controllers/component/deleteComponent.js');
const updateComponents = require('./../controllers/component/updateComponents.js');
const multer= require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cloudinary = require("../cloudinaryConfig/cloudinary.js")

const componentsRoutes= Router();

componentsRoutes.get("/", async (req, res) =>{
    const {name}= req.query;
    console.log("hola");

    try {
        if(name){
            const compSearch = await findComp(name)
            if(!compSearch){ 
                return res.status(400).send({error:"No such component found"})
            }else{
                return res.status(200).send(compSearch)
            }
        }
        else return res.status(201).send(await allComps())
    } catch (error) {
        return res.status(500).send({error: error.message})

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
        const component = await findById(id)
        return res.status(200).send(component)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

componentsRoutes.put('/delete/:id', async(req, res) => {
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
        const resultPut= await updateComponents(id, data)
        return res.status(200).send("Componente actualizado: " + resultPut)
    } catch (error) {
        res.status(400).send({error})
    }
})

componentsRoutes.get("/stock/all", async(req, res)=>{
    try {
        return res.status(200).send(await findStock())
    } catch (error) {

    }
})

componentsRoutes.put('/activate/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await activateComponent(id);
        res.status(201).send({status: 'Registro reactivado con éxito'});
    } catch (error) {
        res.status(404).send({error});
    }
})

module.exports= componentsRoutes;