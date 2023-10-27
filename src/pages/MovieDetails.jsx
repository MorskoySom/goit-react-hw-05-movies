import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { searchCast, searchMovieId, searchReviews } from "../api";
import { MovieDetContainer } from "./MovieDetails.styled";
import { Linka } from "components/Layout/Layout.styled";

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

    const handleCastClick = () => {
        searchCast(movieId)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    };

    const handleReviewsClick = () => {
        searchReviews(movieId)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    };

    return (
        <div>
            <Linka to="/">Back to HOME</Linka>
            <MovieDetContainer>
                <div>
                    <h1>{movieData.title}</h1>
                    <p>(rating: {movieData.vote_average})</p>
                </div>
                <div>
                    <h2>Overviews</h2>
                    <p>{movieData.overview}</p>
                </div>
                <div>
                    <h2>Genres</h2>
                    <p>{genres}</p>
                </div>
            </MovieDetContainer>

            <MovieDetContainer>
                <Linka to="cast" onClick={handleCastClick}>Cast</Linka>
                <Linka to="reviews" onClick={handleReviewsClick}>Reviews</Linka>
            </MovieDetContainer>

            <Outlet />


        </div>
    );
}


