import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import { SeriesResponse } from '../interfaces/series_response.interface';

export type SeriesOption = "popular" | "top_rated" | "on_the_air" | "airing_today";

const useSeries = (option: SeriesOption = "popular", page: number = 1) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);
    const { data, error, isLoading, mutate } = useSWR<SeriesResponse>(`${config.baseUrl}tv/${option}?page=${page}&api_key=${config.apiKey}`, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useSeries;