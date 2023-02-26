const {Schema} = require('mongoose');

const RAMs = Schema({
    type: String,
    capacity: Number,
    frequency: Number
});

module.exports = RAMs;