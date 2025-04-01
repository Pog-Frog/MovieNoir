import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import { MoviesResponse } from '../interfaces/movie_response.interface';
import { SeriesResponse } from '../interfaces/series_response.interface';
import { CategoriesTypes } from '../types/category.type';
import { MovieOption } from './useMovies';
import { SeriesOption } from './useSeries';

const useItems = (id: number | undefined, category: CategoriesTypes, option: MovieOption | SeriesOption, page: number = 1) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);

    let url: string = '';

    if (option === "trending" && category === "tv") {
        url = `${config.baseUrl}${option}/${category}/day?api_key=${config.apiKey}`;
    } else if (option === "similar") {
        if (category === "movie") {
            url = `${config.baseUrl}movie/${id}/similar?api_key=${config.apiKey}`;
        }
        else {
            url = `${config.baseUrl}tv/${id}/similar?api_key=${config.apiKey}`;
        }
    } else {
        url = `${config.baseUrl}${category}/${option}?page=${page}&api_key=${config.apiKey}`;
    }

    const { data, error, isLoading, mutate } = useSWR<MoviesResponse | SeriesResponse>(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useItems;