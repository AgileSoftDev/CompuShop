const { Router }= require("express");
const {allComps, findComp, findByCategory, findById} = require("../controllers/getComponents.js");
const createComponent = require('./../controllers/createComponent.js')


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
                return res.status(404).send(`${category} is not a type`)
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
        res.status(400).send({error: error})
    }
})

module.exports= componentsRoutes;