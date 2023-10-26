import { useState, useEffect } from "react";
import { trandsDay } from "../api";
import MoviesPage from "pages/MoviesPage";
import { Link, Routes, Route } from "react-router-dom";

export default function HomePage() {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        trandsDay()
            .then(data => {
                const titles = data.results.map(item => item.title);
                setTitles(titles);
            })
            .catch(error => {
                console.error('Помилка при отриманні даних:', error);
            });
    }, []);

    return (
        <div>
            <h1> Tranding today </h1>
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>
                        <Link to={`/movies/${title}`}>{title}</Link>
                    </li>
                ))}
            </ul>
            <Routes>
                <Route path="/movies/:movieID" element={<MoviesPage />} />
            </Routes>
        </div>
    );
}

