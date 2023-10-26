import axios from "axios";

const API_KEY = 'b43bf019f87c421af8d090cb3b863d6f';

export const trandsDay = async () => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    });
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?${params}`);
    return response.data
}

export const searchMovieTitle = async (title) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        query: title,
    });
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?${params}`);
    return response.data
}

export const searchMovieId = async (movieID) => {
    const movie_id = movieID
    const params = new URLSearchParams({
        api_key: API_KEY,
    });
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?${params}`);
    return response.data
}


