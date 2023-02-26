const {Schema} = require('mongoose');

const Storages = new Schema({
    type: String,
    capacity: Number
})

module.exports = Storages;