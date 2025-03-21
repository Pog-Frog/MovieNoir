import { useState, useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import "swiper/css/autoplay";
import { Swiper as SwiperClass } from "swiper";
import { toast } from "react-toastify";
import Movie from "../../interfaces/movie.interface";
import useMovies from "../../hooks/useMovies";
import ClipLoader from "react-spinners/ClipLoader";
import HeroSliderItem from "./heroslider_item";


const HeroSlider = () => {
    const [movies, SetMovies] = useState<Movie[]>([]);
    const swiperRef = useRef<SwiperClass | null>(null);

    const { data, error, isLoading } = useMovies("popular");

    const pauseSwiper = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    }

    const resumeSwiper = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    }

    const updateSwiperRef = (swiper: SwiperClass) => {
        swiperRef.current = swiper;
    }

    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch movies");
        }

        if (data) {
            const movies = data.results.filter((movie) => {
                return movie.backdrop_path != null &&
                    movie.poster_path != null &&
                    movie.overview != "";
            });
            SetMovies(movies.slice(0, 1));
        }
    }, [data, error]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[80vh]">
                <ClipLoader color="#ffffff" loading={true} size={150} />
            </div>
        );
    }

    return (
        <div className="min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                onSlideChange={pauseSwiper}
                onSlideChangeTransitionEnd={resumeSwiper}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSwiper={updateSwiperRef}
                className="h-full"
            >
                {movies.map((movie, index) => {
                    return (
                        <SwiperSlide key={index} className="h-full">
                            {({isActive}) => (
                                <HeroSliderItem movie={movie} isActive={isActive} pauseSwiper={pauseSwiper} resumeSwiper={resumeSwiper} />
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
export default HeroSlider;