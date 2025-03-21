import useSWR from 'swr';
import axios from 'axios';
import config from '../api/config';


type MovieOption = "trailer";

const useMovie = (option: MovieOption = "trailer", id: number) => {
    const fetcher = async (url: string) => axios.get(url).then(res => res.data);

    let url = "";

    if (option === "trailer") {
        url = `${config.baseUrl}movie/${id}/videos?api_key=${config.apiKey}`;
    }

    const { data, error, isLoading, mutate } = useSWR(url, fetcher);


    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useMovie;