const axios = require("axios");
const User= require("../models/users");
const {getUser}=require("./getUser.js")


const deleteUser = async (id) =>{
        const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = false
        return await userxd.save().catch(e => console.log(e))
}

const activateUser = async(id)=>{
    const userxd = await User.findOne({_id: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.isActive = true
        return await userxd.save().catch(e => console.log(e))
}

const updateUser = async(id, data) => {
    console.log(id)
    console.log(data)
    const user = await User.findOne({ _id: id });
    console.log(user)
    if(!component) throw 'No se ha encontrado un componente con ese ID';
    user.userName = data.userName;
    user.userCategory = data.userCategory;
    user.email = data.email;
    user.password = data.password;
    user.wallet = data.wallet;
    user.phoneNumber = data.phoneNumber;
    return await user.save().catch(e => console.log(e));
}


module.exports= {deleteUser, activateUser, updateUser}