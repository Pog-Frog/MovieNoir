interface genre {
    id: number;
    name: string;
}

export default interface Series {
    id: number;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
    genres: genre[];
    overview: string;
    first_air_date: string;
    release_date: string;
    status: string;
    tagline: string;
    vote_average: number;
    name: string;
    title: string;
    seasons?: number;
};