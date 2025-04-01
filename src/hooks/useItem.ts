import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import { CategoriesTypes } from '../types/category.type';
import Movie from '../interfaces/movie.interface';
import Series from '../interfaces/series.interface';

const useItem = (category: CategoriesTypes, id: number) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);
    
    let url: string = '';
    
    if (category === "movie") {
        url = `${config.baseUrl}movie/${id}?api_key=${config.apiKey}`;
    } else {
        url = `${config.baseUrl}tv/${id}?api_key=${config.apiKey}`;
    }
    
    const { data, error, isLoading, mutate } = useSWR<Movie | Series>(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useItem;