import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
};

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};

export const tvType = {
    popular: 'popular',
    on_the_air: 'on_the_air',  
    top_rated: 'top_rated',
};

const tmdbApi = {
    getMovieList: (type: keyof typeof movieType, params: unknown) => { //TODO: change to the correct type (params) -> string
        const url = `/movie/${movieType[type]}`;
        return axiosClient.get(url, { params });
    },

    getTvList: (type: keyof typeof tvType, params: unknown) => { 
        const url = `/tv/${tvType[type]}`;
        return axiosClient.get(url, { params });
    },

    getVideos: (cat: keyof typeof category, id: number) => {
        const url = `/${cat}/${id}/videos`;
        return axiosClient.get(url);
    },

    search: (cat: keyof typeof category, params: unknown) => {
        const url = `/search/${category[cat]}`;
        return axiosClient.get(url, {params});
    },

    getDetail: (cat: keyof typeof category, id: number, params: unknown) => {
        const url = `/${cat}/${id}`;
        return axiosClient.get(url, {params});
    },

    getCredits: (cat: keyof typeof category, id: number) => {
        const url = `/${cat}/${id}/credits`;
        return axiosClient.get(url);
    },

    getSimilar: (cat: keyof typeof category, id: number) => {
        const url = `/${cat}/${id}/similar`;
        return axiosClient.get(url);
    }
}

export default tmdbApi;