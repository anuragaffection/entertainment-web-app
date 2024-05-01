const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isAdult: {
        type: Boolean,
        required: true
    },
    mediaType: {
        type: String,
        enum: ['movie', 'tv'],
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = { Bookmark };
