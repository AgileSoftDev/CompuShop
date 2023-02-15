const { Router } = require('express');
const {allUsers, findUser, verifyEmail} = require("../controllers/getUser.js")

const router = Router();

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
        return error
    }
})

router.get("/users/:mail", async (req, res) =>{
    try {
        return res.status(200).send(await verifyEmail(req.params.mail))
     } catch (error) {
         return error
     }
})