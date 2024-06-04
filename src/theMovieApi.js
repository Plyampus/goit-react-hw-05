import axios from "axios";

const API_KEY = "baa981fd2c09ae8622a0aa5a7bc8b1dd";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";


export const fetchTrendMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
}

export const fetchMovieByKeyword = async (query) => {
    const response = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    return response.data;
}

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);

    return response.data;
}

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);

    return response.data;
}

export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

    return response.data;
}
