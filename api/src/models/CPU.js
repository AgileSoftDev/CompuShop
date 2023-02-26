const {model, Schema} = require('mongoose');

const CPUSchema = new Schema({
    socket: String,
    chipset: [String],
    memory: {
        type: String,
        max: Number
    },
})

const CPUs = model('CPUs', CPUSchema);

module.exports = CPUs;