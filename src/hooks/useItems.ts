import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import { MoviesResponse } from '../interfaces/movie_response.interface';
import { SeriesResponse } from '../interfaces/series_response.interface';
import { CategoriesTypes } from '../types/category.type';
import { MovieOption } from './useMovies';
import { SeriesOption } from './useSeries';

const useItems = (category: CategoriesTypes, option: MovieOption | SeriesOption, page: number = 1) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);
    const { data, error, isLoading, mutate } = useSWR<MoviesResponse | SeriesResponse>(`${config.baseUrl}${category}/${option}?page=${page}&api_key=${config.apiKey}`, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useItems;