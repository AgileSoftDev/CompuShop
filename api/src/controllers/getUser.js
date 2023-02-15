const axios = require("axios");
const { user }= require("../models/user.json")

const allUsers= async()=>{
    try {
        return await user
    } catch (error) {
        return error
    }
}

const findUser = async (name)=>{
    try {
        const compByName = await allUsers()
        const compRes = compByName.filter((e)=>{
            if(e.userName.toLowerCase().match(name.toLowerCase())){
                return true
            }
            return false
        })
        return compRes
    } catch (error) {
        return error
    }
}

const verifyEmail = async (mail)=>{
    try {
        const compByName = await allUsers()
        const compRes = compByName.filter((e)=>{
            if(e.email.match(mail)){
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
    allUsers,
    findUser,
    verifyEmail
}