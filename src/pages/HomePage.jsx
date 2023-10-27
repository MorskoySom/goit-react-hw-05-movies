import { useState, useEffect } from "react";
import { trandsDay } from "../api";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        trandsDay()
            .then(data => {
                const movies = data.results;
                setMovies(movies);
            })
            .catch(error => {
                console.error('Помилка при отриманні даних:', error);
            });
    }, []);

    return (
        <div>
            <h1> Tranding today </h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

