const Components = require('./../models/components.js')

const createComponent = async data => {
    console.log(data)
    if(!data.name) throw 'Atributo «Nombre» es requerido';
    if(!data.img) throw 'Atributo «Imagen» es requerido';
    // if(!data.category) throw 'Atributo «Categoría» es requerido';
    if(!data.price) throw 'Atributo «Precio» es requerido';
    if(!data.img) throw 'Atributo «img» es requerido';
    if(!data.description) throw 'Atributo «Descripción» es requerido';
    if(!data.description_2) throw 'Atributo «Descripción_2» es requerido';
    if(!data.description_3) throw 'Atributo «Descripción_3» es requerido';
    if(!data.description_4) throw 'Atributo «Descripción_4» es requerido';
    if(!data.stock) throw 'Atributo «stock» es requerido';
    if(!data.quantityStock) throw 'Atributo «quantityStock» es requerido';
    
    const component = new Components(data);
    const savedComponent = await component.save();
    console.log("savedComponent" + savedComponent)
    return savedComponent
}

module.exports = createComponent