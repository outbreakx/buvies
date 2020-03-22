import axios from 'axios';

const API_KEY = 'd8b813dafae4ea935257dba6cb1eae38';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL
});

api.interceptors.request.use(function (config) {
    // add key before reques is sent.
    if (config.url) {
        config.url += `?api_key=${API_KEY}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default api;