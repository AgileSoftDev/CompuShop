const axios = require("axios");
const { user }= require("../models/user.json")
const { User}= require("../models/User");

const getUser= async()=>{
    try {
        return await user
    } catch (error) {
        return error
    }
}

module.exports= getUser
