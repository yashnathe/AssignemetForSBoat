import React, { useState } from 'react';
import axios from 'axios';

const AddScreen = () => {
    const [formData, setFormData] = useState({
        screenNumber: '',
        seats: '',
    });

    const { screenNumber, seats } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/admin/addScreen', {
                ...formData,
                seats: seats.split(','),
            });
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Screen Number</label>
                <input type="number" name="screenNumber" value={screenNumber} onChange={onChange} required />
            </div>
            <div>
                <label>Seats (comma separated)</label>
                <input type="text" name="seats" value={seats} onChange={onChange} required />
            </div>
            <button type="submit">Add Screen</button>
        </form>
    );
};

export default AddScreen;
