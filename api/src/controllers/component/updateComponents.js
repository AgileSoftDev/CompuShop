const Components = require('../../models/components.js');

const updateComponents = async(id, data) => {
    console.log(id)
    console.log(data)
    const component = await Components.findOne({ _id: id });
    console.log(1)
    console.log(component)
    console.log(2)
    if(!component) throw 'No se ha encontrado un componente con ese ID'
    component.name = data.name;
    component.category = data.category;
    component.price = data.price;
    component.description = data.description;
    component.img = data.img;
    console.log(component)
    return await component.save().catch(e => console.log(e));
}

module.exports = updateComponents