// src/articles-api.js
import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "nAkoceIY0l7aVwVNqN9mILLiO0CjiFKOkUjftZ-t7zs";

export const fetchArticlesWithTopic = async (topic, page) => {
    try {
        const response = await axios.get(`${baseURL}/search/photos`, {
            params: {
                query: topic,
                client_id: API_KEY,
                page,
            },
        });

        console.log(response.data);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};