const { Router }= require("express");
const {allReviews, findByUserId, findById, findByComponentId} = require("../controllers/review/getReview.js");
const createReview = require('../controllers/review/createReview.js');
const deleteReview = require('../controllers/review/deleteReview.js');
const updateReview = require('../controllers/review/updateReview.js');

const reviewRoutes= Router();

reviewRoutes.get("/", async (req, res) =>{
    try {
        return res.status(201).send(await allReviews())
    } catch (error) {
        res.status(404).send({error})
    }
});

reviewRoutes.get("/:category", async(req, res)=>{
    const {category}= req.params;
    try {
        res.status(201).send(await findByUserId(category));
    } catch (error) {
        res.status(404).send({error})
    }
});

reviewRoutes.get("/id/:id", async(req, res)=>{
    const {id}= req.params
    try {
        return res.status(200).send(await findById(id))
    } catch (error) {
        res.status(404).send({error})
    }
})

reviewRoutes.get('/component/:id', async(req, res) => {
    try {
        const {id} = req.params;
        res.status(201).send(await findByComponentId(id))
    } catch (error) {
        res.status(404).send({error})
    }
})

reviewRoutes.post("/", async(req, res)=>{
    try {
        res.status(201).send(await createReview(req.body));
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})

reviewRoutes.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await deleteReview(id);
        res.status(201).send({status: 'Reseña eliminada con éxito'});
    } catch (error) {
        res.status(404).send({error});
    }
})

reviewRoutes.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        res.status(204).send(await updateReview(id, data))
    } catch (error) {
        res.status(404).send({error})
    }
})

module.exports= reviewRoutes;