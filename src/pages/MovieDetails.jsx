import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovieId } from "../api";

export default function MovieDetails() {
    const [movieData, setMovieData] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        searchMovieId(movieId)
            .then(data => {
                setMovieData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, [movieId]);

    if (movieData === null) {
        return <div>Loading...</div>;
    }

    const genres = movieData.genres.map(genre => genre.name).join(", ");

    return (
        <div>
            <h1>{movieData.title}</h1>
            <p>Voutes <span>{movieData.vote_average}</span></p>
            <h2>Overviews</h2>
            <p>{movieData.overview}</p>
            <h2>Genres</h2>
            <p>{genres}</p>
        </div>
    );
}


