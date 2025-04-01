import React, { useEffect, useState } from "react";
import Movie from "../../interfaces/movie.interface";
import Series from "../../interfaces/series.interface";
import useItems from "../../hooks/useItems";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesTypes } from "../../types/category.type";
import { MovieOption } from "../../hooks/useMovies";
import { SeriesOption } from "../../hooks/useSeries";
import SwiperListItem from "./swiper_list_item";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import "swiper/css/autoplay";


interface SwiperListItemsProps {
    id?: number;
    category: CategoriesTypes;
    type: MovieOption | SeriesOption;
    setSwiperLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwiperListItems: React.FC<SwiperListItemsProps> = ({ id, category, type, setSwiperLoading }) => {
    const [items, setItems] = useState<(Movie | Series)[]>([]);
    const { data, error, isLoading } = useItems(id, category, type);

    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch movies");
        }

        if (data && !isLoading) {
            setItems(data.results);
            setSwiperLoading(false);
        }

        if (isLoading) {
            setSwiperLoading(true);
        }
    }, [data, error, isLoading, setSwiperLoading]);

    return (
        <div className="">
            {isLoading ? (
                <div className="flex justify-center items-center min-h-[60vh]">
                    <ClipLoader color="#ffffff" loading={true} size={130} />
                </div>
            ) : (
                <Swiper
                    grabCursor={true}
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    className="movie-list-swiper"
                >
                    {items && items.length > 0
                        ? items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SwiperListItem item={item} category={category} />
                            </SwiperSlide>
                        ))
                        : (
                            <p className="text-gray-300 text-lg">
                                No items found
                            </p>
                        )}
                </Swiper>
            )}
        </div>
    );
}

export default SwiperListItems;