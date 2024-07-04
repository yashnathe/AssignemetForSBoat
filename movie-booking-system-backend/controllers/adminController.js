const Screen = require('../models/Screen');
const Movie = require('../models/Movie');

exports.addScreen = async (req, res) => {
    const { screenNumber, seats } = req.body;
    try {
        const screen = new Screen({ screenNumber, seats });
        await screen.save();
        res.json(screen);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.addMovie = async (req, res) => {
    const { title, genre, showtimes } = req.body;
    try {
        const movie = new Movie({ title, genre, showtimes });
        await movie.save();
        res.json(movie);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
