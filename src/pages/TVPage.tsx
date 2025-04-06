import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import config from "../api/config";
import { ClipLoader } from "react-spinners";
import { FooterTVList as ListingOptions } from "../interfaces/footer_options";
import SearchBar from "../components/search_bar/search_bar";
import InfiniteScroll from "react-infinite-scroll-component";
import CardSkeleton from "../components/card_skeleton/card_skeleton";
import GridItem from "../components/grid_item";
import { SeriesOption, useSeriesInfiniteScroll } from "../hooks/useSeries";
import Series from "../interfaces/series.interface";

const TVPage = () => {
    const { option = "popular" } = useParams();
    const navigate = useNavigate();
    const [series, setSeries] = useState<Series[]>([]);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        const allowedOptions: SeriesOption[] = ["popular", "top_rated", "on_the_air", "airing_today", "trending"];

        if (!allowedOptions.includes(option as SeriesOption)) {
            navigate("/error");
        }
    }, [navigate, option]);

    useEffect(() => {
        setSeries([]);
        setQuery("");
    }, [option]);;

    const { data, error, isLoading, size, setSize } = useSeriesInfiniteScroll(option as SeriesOption, query);

    const fetchMoreData = () => {
        setSize(size + 1);
    };

    const hasMore = data && data[data.length - 1]?.results.length > 0;

    useEffect(() => {
        if (error) {
            navigate("/error");
        }

        if (data) {
            const newSeries = data.flatMap(page =>
                page.results.filter(series =>
                    series.backdrop_path &&
                    series.poster_path &&
                    series.overview
                )
            );

            if (query || size === 1) {
                setSeries(newSeries);
            } else {
                setSeries(prev => {
                    const existingIds = new Set(prev.map(m => m.id));
                    const uniqueNewMovies = newSeries.filter(series => !existingIds.has(series.id));
                    return [...prev, ...uniqueNewMovies];
                });
            }
        }

    }, [data, error, navigate, query, size]);

    useEffect(() => {
        if (!query) {
            setSeries([]);
            setSize(1);
        }
    }, [query, setSize]);

    const isActiveLink = (link: string) => {
        return (
            option!.replace(/-/g, "_").toLocaleLowerCase() ===
            link.replace(/ /g, "_").toLocaleLowerCase()
        );
    };

    if (!query && isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[80vh]">
                <ClipLoader color="#ffffff" loading={true} size={130} />
            </div>
        );
    }

    return (
        <>
            <div className="h-[65vh] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${config.originalImage("/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg")})`
                }}>
                {/* Overlay */}
                <div className="absolute inset-0 z-20 w-full bg-black/75"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10 w-full h-full"
                    style={{ backgroundImage: "linear-gradient(to top, #0f0f0f, #00000000)" }}>
                </div>
            </div>
            <div className="page-container relative z-20 -mt-[50vh] pb-6 md:py-12 flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col gap-3 md:gap-6">
                    <h2 className="text-3xl md:text-4xl text-white font-medium">
                        TV Series
                    </h2>
                    <ul className="flex flex-row flex-wrap gap-y-1 gap-x-3 md:gap-4 text-xl md:text-2xl text-white">
                        {ListingOptions!.map((item) => (
                            <li
                                key={item.id}
                                className={`transition duration-300 ${isActiveLink(item.text)
                                    ? "text-indigo-500"
                                    : "hover:text-indigo-500"
                                    }`}
                            >
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                    <SearchBar
                        placeholder="Search.."
                        value={query}
                        onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setQuery(e.target.value)
                        }
                        containerClass="max-w-sm bg-white"
                    />
                </div>
                {series.length > 0 ? (
                    <InfiniteScroll
                        dataLength={series.length}
                        next={fetchMoreData}
                        hasMore={!!hasMore}
                        loader={
                            <div className="flex flex-row flex-wrap gap-8">
                                <CardSkeleton repeat={6} />
                            </div>
                        }
                        className="flex flex-row flex-wrap gap-8"
                    >
                        {series.map((series) => (
                            <GridItem
                                key={series.id}
                                item={series}
                                category="tv"
                            />
                        ))}
                    </InfiniteScroll>
                ) : (
                    <p className="text-xl text-gray-300">
                        {query ? "Couldn't find anything related to your search query." : "No movies found."}
                    </p>
                )}
            </div>
        </>
    );
}

export default TVPage;