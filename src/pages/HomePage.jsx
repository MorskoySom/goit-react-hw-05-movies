import { useState, useEffect } from "react";
import { trandsDay } from "../api";
import { Link } from "react-router-dom";
import { Linka } from "components/Layout/Layout.styled";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        trandsDay()
            .then(data => {
                const movies = data.results;
                setMovies(movies);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <h1> Tranding today </h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Linka to={`/movies/${movie.id}`}>{movie.title}</Linka>
                    </li>
                ))}
            </ul>
        </div>
    );
}

