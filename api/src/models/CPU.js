const {Schema} = require('mongoose');

const CPUs = new Schema({
    socket: String,
    chipset: [String],
    memory: {
        type: {type: String},
        max: {type: Number}
    },
})

module.exports = CPUs;