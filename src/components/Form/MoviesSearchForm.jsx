import React from "react";

export default function MoviesSearchForm({ query, onInputChange, onFormSubmit }) {
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                value={query}
                onChange={onInputChange}
                placeholder="Search for movies"
            />
            <button type="submit">Search</button>
        </form>
    );
};
