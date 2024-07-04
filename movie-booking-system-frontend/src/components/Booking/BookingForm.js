import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        userId: '',
        movieId: '',
        seats: [],
        showtime: '',
        totalPrice: 0,
    });

    const { userId, movieId, seats, showtime, totalPrice } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/bookings/create', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>User ID</label>
                <input type="text" name="userId" value={userId} onChange={onChange} required />
            </div>
            <div>
                <label>Movie ID</label>
                <input type="text" name="movieId" value={movieId} onChange={onChange} required />
            </div>
            <div>
                <label>Seats</label>
                <input type="text" name="seats" value={seats} onChange={onChange} required />
            </div>
            <div>
                <label>Showtime</label>
                <input type="text" name="showtime" value={showtime} onChange={onChange} required />
            </div>
            <div>
                <label>Total Price</label>
                <input type="number" name="totalPrice" value={totalPrice} onChange={onChange} required />
            </div>
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
