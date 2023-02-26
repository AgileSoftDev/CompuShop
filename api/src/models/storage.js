const {model, Schema} = require('mongoose');

const storageSchema = new Schema({
    type: String,
    capacity: Number
})

const Storages = model('Storages', storageSchema);

module.exports = Storages;