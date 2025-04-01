import { useNavigate, useParams } from "react-router";
import { CategoriesTypes } from "../../types/category.type";
import { useEffect, useState } from "react";
import useItemCast from "../../hooks/useItemCast";
import CastMember from "../../interfaces/cast_member.interface";
import config from "../../api/config";
import { ClipLoader } from "react-spinners";

const ItemCast = () => {
    const { category, id } = useParams<{ category: CategoriesTypes, id: string }>();
    const navigate = useNavigate();
    const [cast, setCast] = useState<CastMember[]>([]);

    useEffect(() => {
        if (!category || !id) {
            navigate("/error");
            return;
        }
    }, [category, id, navigate]);

    const { data, isLoading, error } = useItemCast(category as CategoriesTypes, parseInt(id as string));

    useEffect(() => {
        if (error) {
            return;
        }

        if (data) {
            setCast(data.cast.slice(0, 8));
        }
    }, [data, error, navigate]);

    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-3xl text-white">Cast</h2>
            <div className="flex flex-row flex-wrap gap-3">
                {isLoading ? (
                    <div className="flex justify-center items-center w-full h-32">
                        <ClipLoader color="#ffffff" loading={true} size={30} />
                    </div>
                ) : (
                    cast?.map((person) => (
                        <div key={person.id}>
                            <a href={`https://www.themoviedb.org/person/${person.id}`} className="w-20 flex flex-col gap-2">
                                <img
                                    src={config.w500Image(person.profile_path)}
                                    alt=""
                                    className="w-full h-32 bg-contain bg-no-repeat"
                                />

                                <p className="text-sm text-gray-300 break-words hyphens-auto">
                                    {person.name}
                                </p>
                            </a>
                        </div>
                    )
                    ))}
            </div>
        </div>
    );
}

export default ItemCast;