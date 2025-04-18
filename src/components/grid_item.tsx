import { useNavigate } from "react-router";
import Movie from "../interfaces/movie.interface";
import Series from "../interfaces/series.interface";
import { CategoriesTypes } from "../types/category.type";
import config from "../api/config";
import ItemRating from "./item/item_rating";
import { dateFormatter } from "../utils/dateFormatter";

interface Props {
  item: Movie | Series;
  category: CategoriesTypes;
};

const GridItem: React.FC<Props> = ({ item, category }) => {
  const navigate = useNavigate();

  const link = "/" + category + "/" + item.id;
  const bg = config.w500Image(item.poster_path || item.backdrop_path);

  return (
    <div className="grow w-full xl:w-[14rem] xl:max-w-[18rem] flex flex-col gap-3 overflow-hidden">
      <div
        className="relative cursor-pointer group"
        onClick={() => navigate(link)}
      >
        <img
          src={item.poster_path || item.backdrop_path ? bg : ""}
          alt={`${item.title || item.name}`}
          className="rounded-md aspect-[1/1.5]"
        />
        <div className="absolute bottom-0 z-40 text-white flex flex-col gap-2 px-4 py-3 opacity-0 scale-75 transition duration-300 delay-100 group-hover:opacity-100 group-hover:scale-100">
          <ItemRating rating={item.vote_average} small={true} />
        </div>
        <div className="absolute inset-0 z-30 w-full h-full bg-black bg-opacity-70 opacity-0 transition duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="flex flex-col gap-1">
        <p
          className="w-fit text-base md:text-xl text-white cursor-pointer"
          onClick={() => navigate(link)}
        >
          {item.title || item.name}
        </p>
        <p
          className="w-fit text-xs md:text-sm text-gray-400 cursor-pointer"
          onClick={() => navigate(link)}
        >
          {dateFormatter(item.release_date ?? item.first_air_date)}
        </p>
      </div>
    </div>
  );
};

export default GridItem;
