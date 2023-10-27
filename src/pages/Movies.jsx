import { searchMovieTitle } from "api";
import React, { useState } from "react";

export default function Movies() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            searchMovieTitle(searchQuery)
                .then(data => {
                    console.log(data);
                    // Тут ви можете зробити щось зі знайденими фільмами
                })
                .catch(error => {
                    console.error('Error', error);
                });
            console.log(searchQuery)
        }
    };



    return (
        <div>
            <h1>SearchMoviesPage</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search for movies"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

