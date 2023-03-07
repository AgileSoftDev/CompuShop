const Review = require('../../models/review.js');

const deleteReview = async(id) => {
    console.log(id)
    const review = await Review.findOne({ _id: id })
    console.log(review)
    if(!review) throw 'No se ha encontrado una reseÃ±a con ese ID'
    await review.remove()
}

module.exports = deleteReview