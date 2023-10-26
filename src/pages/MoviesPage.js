import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovieTitle } from "../api";

export default function MoviesPage() {
    const [movieData, setMovieData] = useState(null);
    const { title } = useParams();

    useEffect(() => {
        searchMovieTitle(title)
            .then(data => {
                setMovieData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Помилка при отриманні даних:', error);
            });
    }, [title]);

    if (movieData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movieData.original_title}</h1>

        </div>
    );
}

// export default function MoviesPage() {
//     return <h1> MoviesPage </h1>
// }

