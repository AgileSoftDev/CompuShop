const generateComponents = require("../models/data.js")


const allComps = async ()=>{
    try {
      return await generateComponents()
    } catch (error) {
        return error
    }
}

module.exports ={
    allComps
}