const Components = require('../../models/components.js');

const deleteComponent = async(id) => {
    console.log(id)
    const component = await Components.findOne({ _id: id })
    console.log(component)
    if(!component) throw 'No se ha encontrado un componente con ese ID'
    component.isActive = false
    await component.save()
}

const activateComponent = async(id) => {
    console.log(id)
    const component = await Components.findOne({ _id: id })
    console.log(component)
    if(!component) throw 'No se ha encontrado un componente con ese ID'
    component.isActive = true
    await component.save()
}

module.exports = {deleteComponent, activateComponent}