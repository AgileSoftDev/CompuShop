const Review = require('../../models/review.js');

const updateReview = async(id, data) => {
    console.log(id)
    console.log(data)
    const review = await Review.findOne({ _id: id });
    console.log(1)
    console.log(review)
    console.log(2)
    if(!review) throw 'No se ha encontrado un review con ese ID'
    review.user = data.user;
    review.userCategory = data.userCategory;
    review.review = data.review;
    review.date = data.date;
    console.log(review)
    return await review.save().catch(e => console.log(e));
}

module.exports = updateReview