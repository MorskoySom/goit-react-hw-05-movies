import { useState, useEffect } from "react";
import { trandsDay } from "../api";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [titles, setTitles] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        trandsDay()
            .then(data => {
                const titles = data.results.map(item => item.title);
                const id = data.results.map(item => item.id);
                setTitles(titles);
                setId(id);
                console.log(titles)
                console.log(id)
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
        </div>
    );
}

