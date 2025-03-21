import { useEffect, useState } from "react";
import Movie from "../../interfaces/movie.interface";
import config from "../../api/config";

interface props {
    movie: Movie;
    isActive: boolean;
    pauseSwiper: () => void;
    resumeSwiper: () => void;
}

const HeroSliderItem: React.FC<props> = ({ movie, isActive, pauseSwiper, resumeSwiper }) => {

    const [overview, setOverview] = useState(movie.overview);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setOverview(
                    movie.overview.length > 120
                        ? movie.overview.slice(0, 120).trim() + ".."
                        : movie.overview
                );
            } else {
                setOverview(movie.overview);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [movie.overview]);

    return (
        <div className="relative">
            <img
                src={config.originalImage(movie.backdrop_path)}
                className="h-[60vh] sm:h-[70vh] md:h-screen w-full bg-cover bg-center select-none"
                alt="movie_backdrop"
            />
            <div className="section_container absolute top-1/2 z-40 flex flex-row items-center gap-16 -translate-y-1/2 w-full justify-between">
                <div className="flex flex-col gap-3 md:gap-5">
                    <h2
                        className={`text-2xl sm:text-3xl md:text-5xl text-white font-medium opacity-0 -translate-y-full transition duration-700 ${isActive && "!opacity-100 !translate-y-0"
                            }`}
                    >
                        {movie.title}
                    </h2>
                    <div
                        className={`max-w-4xl text-base sm:text-lg md:text-xl text-gray-100 opacity-0 -translate-y-1/2 transition duration-700 delay-300 ${isActive && "!opacity-100 !translate-y-0"
                            }`}
                    >
                        {overview}
                    </div>
                    <div
                        className={`flex flex-col sm:flex-row gap-5 sm:gap-3 opacity-0 -translate-y-1/2 transition duration-700 delay-[600ms] ${isActive && "!opacity-100 !translate-y-0"
                            }`}
                    >
                        <button
                            className="w-fit px-8 py-1.5 bg-indigo-700 text-base md:text-lg text-white font-medium rounded-3xl"
                            onClick={() => { }}
                        >
                            {/* TODO: Add more info option */}
                            More info
                        </button>
                        <button
                            className="hidden md:block w-fit px-8 py-1.5 border-2 border-white text-lg text-white font-medium rounded-3xl"
                            onClick={() => { }}
                        >
                            {/* TODO: Add the watch trailer modal */}
                            Watch trailer
                        </button>
                    </div>
                </div>
                <img
                    src={config.w500Image(movie.poster_path)}
                    alt="movie_poster"
                    className={`hidden md:block w-[15rem] lg:w-[18rem] xl:w-[20rem] rounded-md scale-50 transition duration-700 ${isActive && "!scale-100"
                        }`}
                />

                
                
            </div>
            <div className="absolute inset-0 z-30 w-full h-full bg-black/60"></div>
        </div>
    );
}

export default HeroSliderItem;