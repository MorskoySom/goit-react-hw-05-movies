import axios from "axios";

const API_KEY = 'b43bf019f87c421af8d090cb3b863d6f';

export const trandsDay = async () => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    });
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?${params}`);
    return response.data
}

export const searchMovie = async (title) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        query: title,
    });
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?${params}`);
    return response.data
}



// export const fetchImages = async (query, page) => {
//     const params = new URLSearchParams({
//         key: API_KEY,
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//         per_page: 12,
//         page: page
//     });
//     const response = await axios.get(`${BASE_URL}?${params}`);
//     return response.data
// }
