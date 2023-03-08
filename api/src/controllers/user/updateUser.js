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
    try {
        const user = await User.findOne({ userid: id });
        if(!user) throw 'No se ha encontrado un componente con ese ID';
        if(data.name) user.name = data.name;
        if(data.nickname) user.nickname = data.nickname;
        if(data.email) user.email = data.email;
        if(data.wallet) user.wallet = data.wallet;
        if(data.phoneNumber) user.phoneNumber = data.phoneNumber;
        if(data.addresses) user.addresses = data.addresses;
        if(data.orders) user.orders = [...user.orders,data.orders];
        user.updated_at = Date.now()
        await user.save()

    } catch (error) {
        throw new Error("Hubo un problema al actualizar usuario")
    }
  
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

const addOrder = async(id, order) =>{
    const userxd = await User.findOne({userid: id})
        if(!userxd){
            throw 'No se ha encontrado un usuario con ese ID'
        }
        userxd.orders.push(order)
        return await userxd.save().catch(e => console.log(e))
}


module.exports= {deleteUser, activateUser, updateUser, giveAdmin, removeAdmin, addOrder}