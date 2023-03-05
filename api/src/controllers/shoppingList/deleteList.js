const ShoppingList = require('../../models/shoppingList.js');

const deleteList = async(id) => {
    console.log(id)
    const list = await ShoppingList.findOne({ _id: id })
    if(!list) throw 'No se ha encontrado una lista con ese ID'
    await list.remove()
}

module.exports = deleteList