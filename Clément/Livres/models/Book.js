const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    status: { type: String, default: 'available' },
    currentPage: { type: Number, default: 0 },
    isFavorite: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', bookSchema);