import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Provider from "../interfaces/providers.interface";
import { CategoriesTypes } from "../types/category.type";
import useProviders from "../hooks/useProviders";
import ClipLoader from "react-spinners/ClipLoader";
import config from "../api/config";
import { FooterProvidersList as ProvidersList } from "../interfaces/footer_options";

const ProvidersPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const allowedCategories: CategoriesTypes[] = ["movie", "tv"];

        if (!allowedCategories.includes(category as CategoriesTypes)) {
            navigate("/error");
        }
    }, [navigate, category]);

    const [providers, setProviders] = useState<Provider[]>([]);
    const { data, error, isLoading } = useProviders(category as CategoriesTypes);

    useEffect(() => {
        if (error) {
            navigate("/error");
        }

        if (data) {
            setProviders(data.results.slice(0, 50));
        }
    }, [data, error, navigate]);

    if (isLoading) {
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
                    backgroundImage: `url(${config.originalImage("/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg")})`
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
                        Movies
                    </h2>
                    <ul className="flex flex-row flex-wrap gap-y-1 gap-x-3 md:gap-4 text-xl md:text-2xl text-white">
                        {ProvidersList.map((item) => (
                            <li
                                key={item.id}
                                className={`transition duration-300 ${item.value === category
                                    ? "text-indigo-500"
                                    : "hover:text-indigo-500"
                                    }`}
                            >
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {providers?.map((item) => (
                        <div key={item.provider_id} className="flex flex-col items-center gap-2">
                            <img
                                src={config.w500Image(item.logo_path)}
                                alt={item.provider_name}
                                className="rounded-full w-[70px] md:w-[100px]"
                            />
                            <p className="text-white text-sm text-center">{item.provider_name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProvidersPage;