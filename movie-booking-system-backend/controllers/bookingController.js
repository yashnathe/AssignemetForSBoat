const Booking = require('../models/Booking');
const Movie = require('../models/Movie');

exports.createBooking = async (req, res) => {
    const { userId, movieId, seats, showtime, totalPrice } = req.body;
    try {
        const booking = new Booking({
            user: userId,
            movie: movieId,
            seats,
            showtime,
            totalPrice,
        });
        await booking.save();
        res.json(booking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
