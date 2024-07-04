import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get('/api/movies');
                setMovies(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <div key={movie._id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.genre}</p>
                    <p>{movie.showtimes.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
