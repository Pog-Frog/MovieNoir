export const FooterMovieList: ListType[] = [
    {
        id: 1,
        text: "Popular",
        path: "/movies/popular",
    },
    {
        id: 2,
        text: "Trending",
        path: "/movies/trending",
    },
    {
        id: 3,
        text: "Top Rated",
        path: "/movies/top_rated",
    },
    {
        id: 4,
        text: "Now Playing",
        path: "/movies/now_playing",
    },
    {
        id: 5,
        text: "Upcoming",
        path: "/movies/upcoming",
    },
];

export const FooterTVList: ListType[] = [
    {
        id: 1,
        text: "Popular",
        path: "/tv-series/popular",
    },
    {
        id: 2,
        text: "Trending",
        path: "/tv-series/trending",
    },
    {
        id: 3,
        text: "Top Rated",
        path: "/tv-series/top_rated",
    },
    {
        id: 4,
        text: "On the Air",
        path: "/tv-series/on_the_air",
    },
    {
        id: 5,
        text: "Airing Today",
        path: "/tv-series/airing_today",
    },
]

export const FooterProvidersList: ListType[] = [
    {
        id: 1,
        text: "Movies",
        path: "/providers/movie",
        value: "movie",
    },
    {
        id: 2,
        text: "TV Series",
        path: "/providers/tv",
        value: "tv",
    },
]

interface ListType {
    id: number;
    text: string;
    path: string;
    value?: string;
}