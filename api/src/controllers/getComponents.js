// const {components} = require("../models/data.json");
// const { Components}= require("../models/components");

// const allComps = async ()=>{
//     try {
//       return await components
//     } catch (error) {
//         return error
//     }
// }

// const findComp = async (name)=>{
//     try {
//         const compByName = await allComps()
//         const compRes = compByName.filter((e)=>{
//             if(e.name.toLowerCase().match(name) || e.name.toUpperCase().match(name)){
//                 return true
//             }
//             return false
//         })
//         return compRes
//     } catch (error) {
//         return error
//     }
// }

// const findByCategory = async (category)=>{
//     try {
//         const compByCategory = await allComps()
//         const compResponse = await compByCategory.filter((e)=>e.category.toLowerCase()== category.toLowerCase())
//         return compResponse
//     } catch (error) {
//         return error
//     }
// }

// const findById = async (id)=>{
//     try {
//     const compById = await allComps()
//     const res = compById.filter((e)=>{
//         if (e.id==id) {
//             return true
//         }
//         return false
//     })
//     return res
// } catch (error) {
//         return error
// }
// }

// module.exports ={
//     allComps,
//     findComp,
//     findByCategory,
//     findById
// }

const Components = require("../models/components");

const allComps = async () => {
    return await Components.find()
}

const findComp = async (name) => {
    const regExpName = new RegExp(name, 'i');
    const compByName = await Components.find({ name: regExpName });
    if (!compByName.length) throw 'No se han encontrado componentes con ese nombre';
    else return compByName;
}

const findByCategory = async (category) => {
    const regExpCategory = new RegExp(category, 'i');
    const compByCategory = await Components.find({ category: regExpCategory });
    if (!compByCategory.length) throw 'No se han encontrado componentes con esa categoría';
    else return compByCategory;
}

const findById = async (id) => {
    const component = await Components.findOne({ _id: id }).catch(e => {throw 'No se ha encontrado un componente con ese ID'});
    return component;
}

module.exports = {
    allComps,
    findComp,
    findByCategory,
    findById
}

/*
const data = require('./../models/message.json')
    console.log(data)
    data.components.map(async e => {
        const xd = new Components(e);
        await xd.save()
    })
*/