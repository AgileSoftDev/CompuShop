const Components = require('../../models/components');

const updateComponents = async(id, data) => {
    const component = await Components.findOne({ _id: id });
    if(!component) throw 'No se ha encontrado un componente con ese ID'
    component.name = data.name;
    component.category = data.category;
    component.price = data.price;
    component.description = data.description;
    component.description_2 = data.description_2;
    component.description_3 = data.description_3;
    component.description_4 = data.description_4;
    component.maker= data.maker;
    component.stock= data.stock;
    component.quantityStock= data.quantityStock;
    component.img = data.img;
    
    return await component.save().catch(e => console.log(e))
}

module.exports = updateComponents