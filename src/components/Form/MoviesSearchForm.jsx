import React, { useState } from "react";

export default function MoviesSearchForm({ onSubmit }) {
    const [inputQuery, setInputQuery] = useState("");

    const handleInputChange = (e) => {
        setInputQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputQuery);
    };



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputQuery}
                onChange={handleInputChange}
                placeholder="Search for movies"
            />
            <button type="submit">Search</button>
        </form>
    );
}