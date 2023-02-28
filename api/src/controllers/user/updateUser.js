const axios = require("axios");
const User= require("../../models/users");
const {getUser}=require("./getUser.js")


const deleteUser = async (id) =>{
        const userxd = await User.findOne({userid: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = false
        return await userxd.save().catch(e => console.log(e))
}

const activateUser = async(id)=>{
    const userxd = await User.findOne({userid: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = true
        return await userxd.save().catch(e => console.log(e))
}

const updateUser = async(id, data) => {
    const user = await User.findOne({ userid: id });
    if(!user) throw 'No se ha encontrado un componente con ese ID';
    user.nickname = data.nickname;
    user.email = data.email;
    user.wallet = data.wallet;
    user.phoneNumber = data.phoneNumber;
    user.addresses = data.addresses;
    user.updated_at = Date.now()
    return await user.save().catch(e => console.log(e));
}

const giveAdmin = async(id) =>{
    const userxd = await User.findOne({userid: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isAdmin = true
        return await userxd.save().catch(e => console.log(e))
}

const removeAdmin = async(id) =>{
    const userxd = await User.findOne({userid: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isAdmin = false
        return await userxd.save().catch(e => console.log(e))
}


module.exports= {deleteUser, activateUser, updateUser, giveAdmin, removeAdmin}