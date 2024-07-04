import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        showtimes: '',
    });

    const { title, genre, showtimes } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/admin/addMovie', {
                ...formData,
                showtimes: showtimes.split(','),
            });
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={onChange} required />
            </div>
            <div>
                <label>Genre</label>
                <input type="text" name="genre" value={genre} onChange={onChange} required />
            </div>
            <div>
                <label>Showtimes (comma separated)</label>
                <input type="text" name="showtimes" value={showtimes} onChange={onChange} required />
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
