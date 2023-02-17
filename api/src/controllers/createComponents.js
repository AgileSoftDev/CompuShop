const Components = require('./../models/components.js')

const createComponent = async data => {
    console.log(data)
    if(!data.name) throw 'Atributo «Nombre» es requerido';
    if(!data.category) throw 'Atributo «Categoría» es requerido';
    if(!data.price) throw 'Atributo «Precio» es requerido';
    if(!data.description) throw 'Atributo «Descripción» es requerido';
    const component = new Components(data);
    const savedComponent = await component.save();
    return savedComponent;
}

module.exports = createComponent