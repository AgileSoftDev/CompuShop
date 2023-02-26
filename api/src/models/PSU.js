const {Schema} = require('mongoose');

const PSUs = new Schema({
    watts: Number,
    form: String
})

module.exports = PSUs;