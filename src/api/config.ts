const config = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: import.meta.env.VITE_TMDB_API_KEY,
    originalImageBaseUrl: 'https://image.tmdb.org/t/p/original',
    w500ImageBaseUrl: 'https://image.tmdb.org/t/p/w500',
    originalImage (imagePath: string) {
        return `${this.originalImageBaseUrl}${imagePath}`;
    },
    w500Image (imagePath: string) {
        return `${this.w500ImageBaseUrl}${imagePath}`;
    }
};

export default config;