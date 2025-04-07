import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import ProvidersResponse from '../interfaces/providers_response.interface';
import { CategoriesTypes } from '../types/category.type';

const useProviders = (category: CategoriesTypes) => {
    const fetcher = (url: string) => axios.get(url).then(res => res.data);

    let url = "";

    if (category === "movie") {
        url = `${config.baseUrl}watch/providers/movie?api_key=${config.apiKey}`;
    } else {
        url = `${config.baseUrl}watch/providers/tv?api_key=${config.apiKey}`;
    }

    const { data, error, isLoading, mutate } = useSWR<ProvidersResponse>(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useProviders;