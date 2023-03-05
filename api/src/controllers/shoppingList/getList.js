const ShoppingList = require("../../models/shoppingList");

const lists = async () => {
    return await ShoppingList.find()
}

const findListByCategory = async (category) => {
    const regExpCategory = new RegExp(category, 'i');
    const listByCategory = await ShoppingList.find({ category: regExpCategory });
    if (!compByCategory.length) throw 'No se han encontrado listas con esa categoría';
    else return listByCategory;
}

const findListById = async (id) => {
    const list = await ShoppingList.findOne({ _id: id }).catch(e => {throw 'No se ha encontrado una lista con ese ID'});
    return list;
}


module.exports = {
    lists,
    findListByCategory,
    findListById
}