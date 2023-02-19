const axios = require("axios");
const {components} = require("../models/data.json");
const { Components}= require("../models/components");

const allComps = async ()=>{
    try {
      return await components
    } catch (error) {
        return error
    }
}

const findComp = async (name)=>{
    try {
        const compByName = await allComps()
        const compRes = compByName.filter((e)=>{
            if(e.name.toLowerCase().match(name)){
                return true
            }
            return false
        })
        return compRes
    } catch (error) {
        return error
    }
}

const findByCategory = async (category)=>{
    try {
        const compByCategory = await allComps()
        const compResponse = await compByCategory.filter((e)=>e.category.toLowerCase()== category.toLowerCase())
        return compResponse
    } catch (error) {
        return error
    }
}

const findById = async (id)=>{
    try {
    const compById = await allComps()
    const res = compById.filter((e)=>{
        if (e.id==id) {
            return true
        }
        return false
    })
    return res
} catch (error) {
        return error
}
}

// const createComponent= async(name, price, category, description, img)=>{
//     try {
//         const newComponent= await allComps()
//     } catch (error) {
//         return error
//     }
// }

module.exports ={
    allComps,
    findComp,
    findByCategory,
    findById
}