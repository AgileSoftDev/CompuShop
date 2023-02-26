const {model, Schema} = require('mongoose');

const RAMSchema = Schema({
    type: String,
    capacity: Number,
    frequency: Number
});

const RAMs = model('RAMs', RAMSchema);

module.exports = RAMs;