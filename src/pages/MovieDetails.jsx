import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { searchCast, searchMovieId, searchReviews } from "../api";
import { LinkBack, MovieDetContainer, DescContainer } from "./MovieDetails.styled";
import { Linka } from "components/Layout/Layout.styled";

export default function MovieDetails() {
    const [movieData, setMovieData] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

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
            })
            .catch(error => {
                console.error('Error', error);
            });
    };


    return (
        <div>
            <LinkBack to={location.state.from}>Go Back</LinkBack>
            <MovieDetContainer>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${movieData.poster_path}`} alt="" />
                </div>
                <DescContainer>
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
                </DescContainer>
            </MovieDetContainer>

            <Linka to="cast" onClick={handleCastClick}>Cast</Linka>
            <Linka to="reviews" onClick={handleReviewsClick}>Reviews</Linka>

            <Outlet to={location.state.from} />

        </div>
    );
}


