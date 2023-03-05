const ShoppingList = require('../../models/shoppingList');

const createShoppingList = async data => {
    console.log(data)
    if(!data.name) throw 'Atributo «Nombre» es requerido';
    if(!data.userId) throw 'Atributo «Id» es requerido';
    if(!data.category) throw 'Atributo «Category» es requerido';
    if(!data.list) throw 'Atributo «List» es requerido';
    
    const shoppingList = new ShoppingList(data);
    const savedList = await shoppingList.save();
    console.log("savedList" + savedList)
    return savedList
}

module.exports = createShoppingList