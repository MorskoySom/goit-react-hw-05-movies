import { searchMovieTitle } from "api";
import MoviesSearchForm from "components/Form/MoviesSearchForm";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();

    const query = params.get("query") ?? ""

    const handleInputChange = (e) => {
        params.set('query', e.target.value);
        setParams(params);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            searchMovieTitle(query)
                .then(data => {
                    const movies = data.results;
                    setMovies(movies);
                })
                .catch(error => {
                    console.error('Error', error);
                });
        }
    };

    useEffect(() => {
        searchMovieTitle(query)
            .then(data => {
                const movies = data.results;
                setMovies(movies);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, [query]);


    const location = useLocation()

    return (
        <div>
            <h1>SearchMoviesPage</h1>
            <MoviesSearchForm
                query={query}
                onInputChange={handleInputChange}
                onFormSubmit={handleSubmit}
            />
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
