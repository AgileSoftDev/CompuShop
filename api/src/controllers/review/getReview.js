//const axios = require("axios");
//const {components} = require("../models/data.json");
const Review = require("../../models/review.js");

const allReviews = async () => {
    return await Review.find()
}

const findByUserId = async (category) => {
    console.log(category)
    const revByCategory = await Review.find({ userCategory: category })
    if (!revByCategory.length) throw 'No se han encontrado reviews con esa categorÃ­a'
    else return revByCategory
}

const findByComponentId = async(id) => {
    const reviews = await Review.find({componentId: id});
    if(!reviews) throw 'No hay comentarios para ese componente'
    else return reviews
}

const findById = async (id) => {
    const review = await Review.findOne({ _id: id }).catch(e => {throw 'No se ha encontrado un review con ese ID'})
    return review;
}

// const createComponent= async(name, price, category, description, img)=>{
//     try {
//         const newComponent= await allComps()
//     } catch (error) {
//         return error
//     }
// }

module.exports = {
    allReviews,
    findByUserId,
    findById,
    findByComponentId
}