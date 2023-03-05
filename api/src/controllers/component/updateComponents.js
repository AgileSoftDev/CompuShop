const Components = require('../../models/components.js');

const updateComponents = async(id, data) => {
    const component = await Components.findOne({ _id: id });
    if(!component) throw 'No se ha encontrado un componente con ese ID'
    if(data.name)component.name = data.name;
    if(data.category)component.category = data.category;
    if(data.price)component.price = data.price;
    if(data.description)component.description = data.description;
    if(data.description_2)component.description_2 = data.description_2;
    if(data.description_3)component.description_3 = data.description_3;
    if(data.description_4)component.description_4 = data.description_4;
    if(data.maker)component.maker= data.maker;
    if(data.stock)component.stock= component.stock
    console.log(component.quantityStock);
    if(data.quantityStock)component.quantityStock=component.quantityStock+data.quantityStock;
    if(data.img)component.img = data.img;
    
    return await component.save()
}

module.exports = updateComponents