interface genre {
    id: number;
    name: string;
}

export default interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
    genres: genre[];
    overview: string;
    release_date: string;
    status: string;
    tagline: string;
    vote_average: number;
    title: string;
}