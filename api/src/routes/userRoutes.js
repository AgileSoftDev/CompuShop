const { Router } = require('express');
const {getAllUsers, getUser, getDB} = require("../controllers/user/getUser.js")
const createUser = require("../controllers/user/createUser")
const {deleteUser, activateUser, updateUser, giveAdmin, removeAdmin, addOrder} = require('../controllers/user/updateUser.js');
const Users = require( "../models/users")

const userRoutes = Router();

userRoutes.get("/", async (req, res) =>{
    const {email}= req.query;
    try {
       if(email){
          return res.status(201).send(await getUser(email))
        }
        return res.status(201).send(await getAllUsers())
    } catch (error) {
        res.status(404).send({error})
    }
})

 userRoutes.get("/db/:email", async(req, res)=>{
    const {email}= req.params
    try {
        if (email) {
            const user = await Users.findOne({email:email})
            if(user)return res.status(200).send(user);
            else throw new Error("No hay ningún usuario con ese email.")
        }else{
            return res.status(201).send(await getDB());
        }
     } catch (error) {
         res.status(404).send(error.message)
     }
 });

userRoutes.get("/email/:email", async(req, res)=>{
     const {email}= req.params
     try {
         return res.status(200).send(await getUser(email))
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
         await updateUser(id, data)
         res.status(200).send("Actualización exitosa")
     } catch (error) {
         res.status(404).send({error})
     }
 })

 userRoutes.put("/giveAdmin/:id", async(req, res)=>{
    const {id}= req.params
    try{
        return res.status(200).send(await giveAdmin(id))
    } catch (error) {
        res.status(400).send(error)
    }
 })

 userRoutes.put("/removeAdmin/:id", async(req, res)=>{
    const {id}= req.params
    try{
        return res.status(200).send(await removeAdmin(id))
    } catch (error) {
        res.status(400).send(error)
    }
 })

 userRoutes.put("/orders/:id", async(req, res)=>{
    const {id}= req.params
    const order= req.body
    try {
        return  res.status(200).send(await addOrder(id, order))
    } catch (error) {
        
    }
 })



module.exports= userRoutes;