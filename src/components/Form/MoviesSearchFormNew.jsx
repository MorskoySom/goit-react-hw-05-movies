import React from "react";
import { useSearchParams } from "react-router-dom";

export default function MoviesSearchForm() {
    const [params, setParams] = useSearchParams();

    const handleInputChange = (e) => {
        params.set('query', e.target.value);
        setParams(params);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        params.set('query', e.target.value);
        setParams(params);
    };

    const query = params.get("query") ?? ""

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for movies"
            />
            <button type="submit">Search</button>
        </form>
    );
};

