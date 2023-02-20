//const axios = require("axios");
//const {components} = require("../models/data.json");
const Components = require("../models/components");

const allComps = async () => {
    return await Components.find()
}

const findComp = async (name) => {
    const regExpName = new RegExp(name);
    const compByName = await Components.find({ name: regExpName });
    if (!compByName.length) throw 'No se han encontrado componentes con ese nombre';
    else return compByName
}

const findByCategory = async (category) => {
    console.log(category)
    const compByCategory = await Components.find({ category: category })
    if (!compByCategory.length) throw 'No se han encontrado componentes con esa categoría'
    else return compByCategory
}

const findById = async (id) => {
    const component = await Components.findOne({ _id: id }).catch(e => {throw 'No se ha encontrado un componente con ese ID'})
    return component;
}

// const createComponent= async(name, price, category, description, img)=>{
//     try {
//         const newComponent= await allComps()
//     } catch (error) {
//         return error
//     }
// }

module.exports = {
    allComps,
    findComp,
    findByCategory,
    findById
}