import api from './api';

const MovieService = {
    getPopular: async (page = 1) => {
        return await api.get('/movie/popular', {
            params: {
                page: page
            }
        }).then( res => {
            return res.data;
        });
    },
    getTopRated: async (page = 1) => {
        return await api.get('/movie/top_rated', {
            params: {
                page: page
            }
        }).then( res => {
            return res.data;
        });
    },
    getUpcoming: async (page = 1) => {
        return await api.get('/movie/upcoming', {
            params: {
                page: page
            }
        }).then( res => {
            return res.data;
        });
    },
    getMovieDetail: async(id) => {
        return await api.get(`/movie/${id}`).then( res => {
            return res.data;
        });
    },
    getMovieRecommendation: async(id) => {
        return await api.get(`/movie/${id}/recommendations`).then( res => {
            return res.data;
        });
    },
    getMovieCast: async(id) => {
        return await api.get(`/movie/${id}/credits`).then( res => {
            return res.data;
        });
    },
    getMovieImages: async(id) => {
        return await api.get(`/movie/${id}/images`).then( res => {
            return res.data;
        });
    },
    getSearch: async(name, page) => {
        return await api.get(`/search/movie`, {params: {
            query: name,
            page: page
        }}).then(res => {
            return res.data;
        });
    },
    generateImageUrl: (imageUrl, size=185) => {
        switch(size) {
            case 185: {
                return 'https://image.tmdb.org/t/p/w185' + imageUrl;
            }
            case 300: {
                return 'https://image.tmdb.org/t/p/w300' + imageUrl;
            }
            default: {
                return 'https://image.tmdb.org/t/p/original' + imageUrl;
            }
        }
	},
	getGenres: async () => {
		return await api.get("/genre/movie/list").then( (res) => {
			return res.data;
		});
	}
};
export default MovieService;