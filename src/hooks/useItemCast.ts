import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';
import { CategoriesTypes } from '../types/category.type';
import CastMemberResponse from '../interfaces/cast_member_response.interface';

const useItemCast = (category: CategoriesTypes, id: number) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);

    let url: string = '';

    if (category === "movie") {
        url = `${config.baseUrl}movie/${id}/credits?api_key=${config.apiKey}`;
    } else {
        url = `${config.baseUrl}tv/${id}/credits?api_key=${config.apiKey}`;
    }

    const { data, error, isLoading, mutate } = useSWR<CastMemberResponse>(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useItemCast;