import {Link} from "react-router";
import {FaPlay} from "react-icons/fa";
import {FooterMovieList, FooterProvidersList, FooterTVList} from "../interfaces/footer_options";
import footerBg from "../assets/footer-bg.jpg";

const Footer = () => {

    return (
        <>
            <div className="relative">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${footerBg})`,
                        filter: 'blur(4px)'
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 "></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 py-8 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex flex-row flex-wrap gap-2 items-center mb-4">
                            <FaPlay className="text-2xl text-indigo-500"/>
                            <p className="text-3xl font-bold text-white">
                                Movie Noir
                            </p>
                        </div>

                        <div className="hidden md:flex flex-col gap-3">
                            {FooterProvidersList.map((item) => (
                                <Link key={item.id} to={item.path}
                                      className="text-lg font-medium text-gray-400 hover:text-white transition-colors">
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center md:hidden">
                        {FooterProvidersList.map((item) => (
                            <Link key={item.id} to={item.path}
                                  className="text-xl font-bold text-gray-400 hover:text-white transition-colors">
                                {item.text}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 items-center md:items-start justify-center">
                        <p className="text-xl font-bold text-white">Movies</p>
                        <div className="flex flex-col gap-2 items-center md:items-start">
                            {FooterMovieList.map((item) => (
                                <Link key={item.id} to={item.path}
                                      className="text-lg text-gray-400 hover:text-white transition-colors">
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 items-center md:items-start justify-center">
                        <p className="text-xl font-bold text-white">TV Series</p>
                        <div className="flex flex-col gap-2 items-center md:items-start">
                            {FooterTVList.map((item) => (
                                <Link key={item.id} to={item.path}
                                      className="text-lg text-gray-400 hover:text-white transition-colors">
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;