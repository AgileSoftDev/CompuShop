const { Router }= require("express");
const {allComps, findComp, findByType} = require("../controllers/getComponents.js");


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

componentsRoutes.get("/:type", async(req, res)=>{
    const {type}= req.params;
    try {
        if(type){
            const allComp= await findByType(type);
            if(!allComp){
                return res.status(404).send(`${type} is not a type`)
            }else{
                res.status(200).send(allComp)
            }
        }
    } catch (error) {
        return error
    }
})

module.exports= componentsRoutes;