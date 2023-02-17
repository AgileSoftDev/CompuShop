
const Components = require('../models/components.js');

const deleteComponent = async(id) => {
    console.log(id)
    const component = await Components.findOne({ _id: id })
    console.log(component)
    if(!component) throw 'No se ha encontrado un componente con ese ID'
    await component.remove()
}

module.exports = deleteComponent