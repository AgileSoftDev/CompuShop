const {model, Schema} = require('mongoose');

const motherboardSchema = new Schema({
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

const Motherboards = model('Motherboards', motherboardSchema);

module.exports = Motherboards