const {model, Schema} = require('mongoose');

const PSUchema = new Schema({
    watts: Number,
    form: String
})

const PSUs = model('PSUs', PSUchema);

module.exports = PSUs;