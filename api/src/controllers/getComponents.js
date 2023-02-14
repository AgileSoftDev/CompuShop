const axios = require("axios")
const {components} = require("../models/data.json")

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

const findByType = async (type)=>{
    try {
        const compByType = await allComps()
        const compResponse = await compByType.filter((e)=>e.type.toLowerCase()== type.toLowerCase())
        return compResponse
    } catch (error) {
        return error
    }
}

module.exports ={
    allComps,
    findComp,
    findByType
}