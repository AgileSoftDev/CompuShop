const Review = require('../../models/review.js')

const createReview = async data => {
    console.log(data)
    if(!data.email) throw 'Atributo «Email» es requerido';
    if(!data.score) throw 'Atributo «Puntiación» de usuario» es requerido';
    if(!data.review) throw 'Atributo «Reseña» es requerido';
    if(!data.componentId) throw 'Atributo «Id del componente» es requerido';
    const review = new Review(data);
    const savedReview = await review.save();
    return savedReview;
}

module.exports = createReview