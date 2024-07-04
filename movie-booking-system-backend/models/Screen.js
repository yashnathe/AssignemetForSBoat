const mongoose = require('mongoose');

const ScreenSchema = new mongoose.Schema({
    screenNumber: { type: Number, required: true },
    seats: [{ type: String, required: true }],
});

const Screen = mongoose.model('Screen', ScreenSchema);
module.exports = Screen;
