const User = require("../models/users.js");

const getUser= async()=>{
    try {
        return await User.find()
    } catch (error) {
        return error
    }
}

const findUser = async (name) => {
    const regExpName = new RegExp(name, 'i');
    const compByName = await User.find({ userName: regExpName });
    if (!compByName.length) throw 'No se han encontrado Usuarios con ese nombre';
    else return compByName;
}

const findByCategory = async (category) => {
    const regExpCategory = new RegExp(category, 'i');
    const compByCategory = await User.find({ userCategory: regExpCategory });
    if (!compByCategory.length) throw 'No se han encontrado Usuarios con esa categoría';
    else return compByCategory;
}

const findById = async (id) => {
    const component = await User.findOne({ _id: id }).catch(e => {throw 'No se ha encontrado un Usuario con ese ID'});
    return component;
}

module.exports= {getUser, findUser, findByCategory, findById}
