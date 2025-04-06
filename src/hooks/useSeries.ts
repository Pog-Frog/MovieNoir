import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import { SeriesResponse } from '../interfaces/series_response.interface';
import useSWRInfinite from 'swr/infinite';

export type SeriesOption = "popular" | "top_rated" | "on_the_air" | "airing_today" | "trending" | "similar";

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

const useSeriesInfiniteScroll = (option: SeriesOption = "popular", query?: string) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);
    const { data, error, isLoading, mutate, size, setSize } = useSWRInfinite<SeriesResponse>(index =>
        query
            ? `${config.baseUrl}search/tv?page=${index + 1}&api_key=${config.apiKey}&query=${query}`
            : option === "trending"
            ? `${config.baseUrl}${option}/tv/day?page=${index + 1}&api_key=${config.apiKey}`
            : `${config.baseUrl}tv/${option}?page=${index + 1}&api_key=${config.apiKey}`,
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

export default useSeries;
export { useSeriesInfiniteScroll };