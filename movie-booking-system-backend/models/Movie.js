const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    showtimes: [{ type: String, required: true }],
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
