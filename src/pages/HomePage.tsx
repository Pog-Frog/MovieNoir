import HeroSlider from "../components/hero_slider/heroslider";
import SwiperList from "../components/swiper_list/swiper_list";

const HomePage = () => {
    return (
        <>
            <HeroSlider />
            <div className="px-6 sm:px-10 md:px-14 lg:px-16 py-6 md:py-12 flex flex-col gap-5">
                <SwiperList
                    title="Trending Movies"
                    link="/movies/trending"
                    category="movie"
                    type="popular"
                />
                <SwiperList
                    title="Upcoming Movies"
                    link="/movies/upcoming"
                    category="movie"
                    type="upcoming"
                />
                <SwiperList
                    title="Trending TV Series"
                    link="/tv-series/trending"
                    category="tv"
                    type="trending"
                />
            </div>
        </>
    );
}

export default HomePage;