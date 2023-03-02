const Components = require("../models/components.js");

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


const findStock = async () => {
    try {
    const data = await allComps();
    const stockfinal = [];
    data.forEach(e => {
        if(e.stock){
        const found = stockfinal.find(x => x.category === e.category);
        if (!found) {
            stockfinal.push({
                category: e.category,
                stock: e.quantityStock
            });
        } else {
            found.stock += e.quantityStock;
        }
    }
    });
    return stockfinal;
} catch (error) {
        throw error
}
};

module.exports = {
    allComps,
    findComp,
    findByCategory,
    findById,
    findStock
}