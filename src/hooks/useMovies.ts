import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import config from '../api/config';
import { MoviesResponse } from '../interfaces/movie_response.interface';

export type MovieOption = "popular" | "top_rated" | "upcoming" | "now_playing" | "similar" | "trending";

const useMovies = (option: MovieOption = "popular", page: number = 1) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);
    const { data, error, isLoading, mutate } = useSWR<MoviesResponse>(`${config.baseUrl}movie/${option}?page=${page}&api_key=${config.apiKey}`, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

const useMovieInfiniteScroll = (option: MovieOption = "popular", query?: string) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);
    const { data, error, isLoading, mutate, size, setSize } = useSWRInfinite<MoviesResponse>(index =>
        query
            ? `${config.baseUrl}search/movie?page=${index + 1}&api_key=${config.apiKey}&query=${query}`
            : option === "trending"
            ? `${config.baseUrl}${option}/movie/day?page=${index + 1}&api_key=${config.apiKey}`
            : `${config.baseUrl}movie/${option}?page=${index + 1}&api_key=${config.apiKey}`,
        fetcher
    );

    return {
        data,
        error,
        isLoading,
        mutate,
        size,
        setSize
    }
}

export default useMovies;
export { useMovieInfiniteScroll };