const generateComponents = require("../models/data.js")


const allComps = async ()=>{
    try {
      return await generateComponents()
    } catch (error) {
        return error
    }
}

const findComp = async (name)=>{
    try {
        const compByName = await allComps()
        const compRes = compByName.filter((e)=>{
            if(e.name===name){
                return true
            }
            return false
        })
        return compRes
    } catch (error) {
        return error
    }
}

module.exports ={
    allComps
}