import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';

const MoviePage = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Example fetch or state update to get movie data
        const fetchMovie = async () => {
            // Example API call or setting state with fetched data
            const response = await fetch('api/movies/123'); // Replace with actual API endpoint
            const data = await response.json();
            setMovie(data);
        };

        fetchMovie();
    }, []);

    return (
        <div className="movie-page">
            <h1>Movie Details Page</h1>
            {movie && <MovieDetails movie={movie} />}
        </div>
    );
};

export default MoviePage;
