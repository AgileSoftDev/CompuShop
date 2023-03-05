const ShoppingList = require('../../models/shoppingList.js');

const updateList = async(id, data) => {
    const list = await ShoppingList.findOne({ _id: id });
    if(!list) throw 'No se ha encontrado un componente con ese ID'
    list.name = data.name;
    list.userId = data.userId;
    list.category = data.category;
    list.list = data.list;

    
    return await list.save().catch(e => console.log(e))
}

module.exports = updateList