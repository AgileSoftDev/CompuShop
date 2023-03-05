const { Router }= require("express");
const {lists, findListByCategory, findListById} = require("../controllers/shoppingList/getList.js");
const createList = require('../controllers/shoppingList/createList.js');
const deleteList = require('../controllers/shoppingList/deleteList.js');
const updateList = require('../controllers/shoppingList/updateList.js');

const listRoutes= Router();

listRoutes.get("/", async (req, res) =>{
    try {
        return res.status(201).send(await lists())
    } catch (error) {
        res.status(404).send({error})
    }
});

listRoutes.get("/:category", async(req, res)=>{
    const {category}= req.params;
    try {
        res.status(201).send(await findListByCategory(category));
    } catch (error) {
        res.status(404).send({error})
    }
});

listRoutes.get("/id/:id", async(req, res)=>{
    const {id}= req.params
    try {
        return res.status(200).send(await findListById(id))
    } catch (error) {
        res.status(404).send({error})
    }
})

listRoutes.post("/", async(req, res)=>{
    try {
        res.status(201).send(await createList(req.body));
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})

listRoutes.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await deleteList(id);
        res.status(201).send({status: 'Lista eliminada con éxito'});
    } catch (error) {
        res.status(404).send({error});
    }
})

listRoutes.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        res.status(204).send(await updateList(id, data))
    } catch (error) {
        res.status(404).send({error})
    }
})

module.exports= listRoutes;