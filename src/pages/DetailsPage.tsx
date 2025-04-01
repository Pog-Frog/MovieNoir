import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import useItem from "../hooks/useItem";
import { CategoriesTypes } from "../types/category.type";
import ClipLoader from "react-spinners/ClipLoader";
import config from "../api/config";
import ItemRating from "../components/item/item_rating";
import { dateFormatter } from "../utils/dateFormatter";
import { timeFormatter } from "../utils/timeFormatter";
import Movie from "../interfaces/movie.interface";
import Series from "../interfaces/series.interface";
import ItemCast from "../components/item/item_cast";

const DetailsPage = () => {
    const navigate = useNavigate();
    const { category, id } = useParams<{ category: CategoriesTypes; id: string }>();

    useEffect(() => {
        if (!category || !id) {
            navigate("/error");
            return;
        }
    }, [category, id, navigate]);

    const { data: item, isLoading, error } = useItem(category as CategoriesTypes, parseInt(id as string));

    useEffect(() => {
        if (error) {
            navigate("/error");
        }
    }, [error, navigate]);


    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center min-h-[80vh]">
                    <ClipLoader color="#ffffff" loading={true} size={130} />
                </div>
            ) : (
                <>
                    <div className="relative">

                        <div className="h-[65vh] bg-cover bg-center relative"
                            style={{
                                backgroundImage: item?.backdrop_path || item?.poster_path ?
                                    `url(${config.originalImage(item?.backdrop_path || item?.poster_path)})` : ""
                            }}>
                            {/* Overlay */}
                            <div className="absolute inset-0 z-20 w-full bg-black/10"></div>
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 z-10 w-full h-full"
                                style={{ backgroundImage: "linear-gradient(to top, #0f0f0f, #00000000)" }}>
                            </div>
                        </div>

                        <div className="page-container py-6 md:py-12 flex flex-col gap-8 md:gap-14">
                            <div className="absolute z-30 top-[30vh] md:top-[20vh] left-0 right-0 flex flex-row justify-center gap-10">
                                <img src={config.originalImage(item?.poster_path || item?.backdrop_path || "")}
                                    alt={item?.title || item?.name}
                                    className="h-[480px] w-[300px] hidden lg:block bg-contain bg-no-repeat rounded-lg" />

                                <div className="max-w-4xl flex flex-col gap-8 min-w-[55%] px-12">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-row items-center gap-3">
                                                <ItemRating rating={item?.vote_average || 0} />
                                                <h2 className="text-3xl md:text-5xl text-white font-medium">
                                                    {item?.title || item?.name}
                                                </h2>
                                            </div>
                                            <p className="text-lg text-gray-300">{item?.tagline}</p>
                                        </div>
                                        <div className="flex flex-row flex-wrap gap-2">
                                            {item?.genres?.slice(0, 5).map((genre) => (
                                                <span
                                                    key={genre.id}
                                                    className="h-fit px-4 py-1 text-gray-200 text-sm bg-indigo-600 rounded-3xl"
                                                >
                                                    {genre.name}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-col gap-3 md:gap-4">
                                            <div className="flex flex-col gap-2">
                                                <h2 className="text-3xl text-white">Overview</h2>
                                                <p className="text-lg text-gray-300">{item?.overview}</p>
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-1.5 md:gap-4">
                                                <div className="flex flex-row gap-2">
                                                    <p className="text-lg text-white font-medium">Status:</p>
                                                    <p className="text-lg text-gray-300">{item?.status}</p>
                                                </div>
                                                <div className="flex flex-row gap-2">
                                                    <p className="text-lg text-white font-medium whitespace-nowrap">
                                                        Release Date:
                                                    </p>
                                                    <p className="text-lg text-gray-300 whitespace-nowrap">
                                                        {dateFormatter(item?.release_date || item?.first_air_date || "")}
                                                    </p>
                                                </div>
                                                {
                                                    (item as Movie)?.runtime ? (
                                                        <div className="flex flex-row gap-2">
                                                            <p className="text-lg text-white font-medium">Runtime:</p>
                                                            <p className="text-lg text-gray-300 whitespace-nowrap">
                                                                {timeFormatter((item as Movie)?.runtime || 0)}
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-row gap-2">
                                                            <p className="text-lg text-white font-medium">Seasons:</p>
                                                            <p className="text-lg text-gray-300">{(item as Series)?.seasons}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <ItemCast />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </>
    );
}

export default DetailsPage;