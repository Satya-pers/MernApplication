const mongoose = require('mongoose');

const ListSSchema = new mongoose.Schema({
    task: { type: String, required: true },
    dateTime: { type: String, required: true },
}, {
    collection: 'tasks'
});

module.exports = mongoose.model('ListS', ListSSchema);