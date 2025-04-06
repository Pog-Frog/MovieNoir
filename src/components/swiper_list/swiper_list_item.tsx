import React from "react";
import Movie from "../../interfaces/movie.interface";
import { CategoriesTypes } from "../../types/category.type";
import { useNavigate } from "react-router";
import config from "../../api/config";
import ItemRating from "../item/item_rating";
import Series from "../../interfaces/series.interface";

interface SwiperListItemsProps {
    item: Movie | Series;
    category: CategoriesTypes;
}

const SwiperListItem: React.FC<SwiperListItemsProps> = ({ item, category }) => {
    const navigate = useNavigate();
    const link = category === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`;
    const backGround = config.w500Image(item.poster_path || item.poster_path);

    return (
        <div className="w-44 flex flex-col gap-3">
            <div className="relative cursor-pointer group" onClick={() => navigate(link)}>
                <img src={item.poster_path || item.poster_path ? backGround : undefined} alt="movie_poster" className="rounded-md aspect-[1/1.5]" />
                <div className="absolute bottom-0 z-40 text-white flex flex-col gap-2 px-4 py-3 opacity-0 scale-75 transition duration-300 delay-100 group-hover:opacity-100 group-hover:scale-100">
                    <ItemRating rating={item.vote_average} small />
                </div>
                <div className="absolute inset-0 z-30 w-full h-full bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100"></div>
            </div>
            <h3
                className="text-white text-center"
                onClick={() => navigate(link)}
            >
                {item.title || item.name}
            </h3>
        </div>
    );
}

export default SwiperListItem;