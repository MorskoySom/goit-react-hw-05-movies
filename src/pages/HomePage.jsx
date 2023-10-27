import { useState, useEffect } from "react";
import { trandsDay } from "../api";
import { Linka } from "components/Layout/Layout.styled";
import { useLocation } from "react-router-dom";

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

    const location = useLocation()

    return (
        <div>
            <h1> Tranding today </h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Linka to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Linka>
                    </li>
                ))}
            </ul>
        </div>
    );
}

