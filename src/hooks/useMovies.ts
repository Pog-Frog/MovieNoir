import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import { MoviesResponse } from '../interfaces/movie_response.interface';

type MovieOption = "popular" | "top_rated" | "upcoming" | "now_playing";

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
 
export default useMovies;