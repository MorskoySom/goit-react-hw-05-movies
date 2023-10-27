import { searchMovieTitle } from "api";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            searchMovieTitle(searchQuery)
                .then(data => {
                    const movies = data.results;
                    setMovies(movies);
                    console.log(movies);
                })
                .catch(error => {
                    console.error('Error', error);
                });
            console.log(searchQuery)
            setSearchQuery("");
        }
    };



    return (
        <div>
            <h1>SearchMoviesPage</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search for movies"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

