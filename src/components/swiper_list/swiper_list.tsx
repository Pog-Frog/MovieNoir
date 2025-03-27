import { useState } from "react";
import { useNavigate } from "react-router";
import SwiperListItems from "./swiper_list_items";
import { CategoriesTypes } from "../../types/category.type";
import { MovieOption } from "../../hooks/useMovies";
import { SeriesOption } from "../../hooks/useSeries";

interface SwiperListProps {
    title: string;
    category: CategoriesTypes;
    type: MovieOption | SeriesOption;
    link?: string;
    id?: number;
}

const SwiperList: React.FC<SwiperListProps> = ({ title, type, category, link, id }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col gap-3 md:gap-5 select-none">
                <div className="flex flex-row flex-wrap items-center justify-between">
                    <h2 className="text-lg md:text-2xl text-white font-medium">{title}</h2>
                    {!isLoading && link && (
                        <button
                            className="text-white text-sm md:text-base hover:cursor-pointer hover:text-indigo-500 px-4 py-2 rounded-3xl transition duration-500"
                            onClick={() => navigate(link)}
                        >
                            View All
                        </button>
                    )}
                </div>
                <SwiperListItems
                    category={category}
                    type={type}
                    id={id}
                    setSwiperLoading={setIsLoading}
                />
            </div>
        </>
    );
}

export default SwiperList;