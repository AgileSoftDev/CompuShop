const {Schema} = require('mongoose');

const Motherboards = new Schema({
    cpu: String,
    chipset: String,
    socket: String,
    memory: {
        max: {type: Number},
        slots: {type: Number},
        type: {type: String},
        hz: [Number]
    },
    maxGraphics: Number,
    form: String
})


module.exports = Motherboards