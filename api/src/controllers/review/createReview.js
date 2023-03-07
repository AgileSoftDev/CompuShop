const Review = require('../../models/review.js')

const createReview = async data => {
    console.log(data)
    if(!data.userId) throw 'Atributo «Id de usuario» es requerido';
    if(!data.userCategory) throw 'Atributo «Categoría de usuario» es requerido';
    if(!data.review) throw 'Atributo «Reseña» es requerido';
    if(!data.componentId) throw 'Atributo «Id de componente» es requerido';
    const review = new Review(data);
    const savedReview = await review.save();
    return savedReview;
}

module.exports = createReview