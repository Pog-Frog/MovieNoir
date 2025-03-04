const config = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4ebefa13f2774d2fc3cd40a76212fee8',
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