const {model, Schema} = require('mongoose');

const GPUSchema = new Schema({
    memory: Number
})

const GPUs = model('GPUs', GPUSchema);

module.exports = GPUs;