const { Router } = require('express');
const {getUser, findUser, findById, findByCategory} = require("../controllers/user/getUser.js")
const createUser = require("../controllers/user/createUser");
const {deleteUser, activateUser, updateUser} = require('../controllers/user/deleteUser.js');

const userRoutes = Router();

userRoutes.get("/", async (req, res) =>{
        const {name}= req.query;
    try {
        if(name){
            res.status(201).send(await findUser(name))
        }
        else return res.status(201).send(await getUser())
    } catch (error) {
        res.status(404).send({error})
    }
})

userRoutes.get("/:category", async(req, res)=>{
    const {category}= req.params;
    try {
        res.status(201).send(await findByCategory(category));
    } catch (error) {
        res.status(404).send({error})
    }
});

userRoutes.get("/id/:id", async(req, res)=>{
    const {id}= req.params
    try {
        return res.status(200).send(await findById(id))
    } catch (error) {
        res.status(404).send({error})
    }
})

userRoutes.post("/", async (req, res) =>{
    try {
        res.status(201).send(await createUser(req.body))
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

userRoutes.put("/:id", async(req, res)=>{
    const {id}= req.params
    try{
        return res.status(200).send(await deleteUser(id))
    } catch (error){
        res.status(400).send(error)
    }
})

userRoutes.put("/activate/:id", async(req, res)=>{
    const {id}= req.params
    try{
        return res.status(200).send(await activateUser(id))
    } catch (error){
        res.status(400).send(error)
    }
})

userRoutes.put("/update/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        res.status(204).send(await updateUser(id, data))
    } catch (error) {
        res.status(404).send({error})
    }
})



module.exports= userRoutes;