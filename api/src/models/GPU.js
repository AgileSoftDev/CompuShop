const {Schema} = require('mongoose');

const GPUs = new Schema({
    memory: Number
})

module.exports = GPUs;