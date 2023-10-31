import { searchMovieTitle } from "api";
import MoviesSearchForm from "components/Form/MoviesSearchForm";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();

    const query = params.get("query") ?? ""

    const onSubmit = (inputQ) => {
        setParams({ query: inputQ });
    };

    useEffect(() => {
        const fetchMovies = async () => {
            if (query.trim() === "") {
                return;
            }

            try {
                const data = await searchMovieTitle(query);
                const movies = data.results;
                setMovies(movies);
            } catch (error) {
                console.error('Error', error);
            }
        };

        fetchMovies();
    }, [query]);

    const location = useLocation()

    return (
        <div>
            <h1>SearchMoviesPage</h1>
            <MoviesSearchForm
                onSubmit={onSubmit}
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
