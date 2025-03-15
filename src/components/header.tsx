import { FaPlay } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Header = () => {

    const headerLinks = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Movies",
            link: "/movies"
        },
        {
            text: "TV Series",
            link: "/tv-series"
        }
    ]

    return (
        <div className="fixed z-50 h-fit flex flex-row justify-between items-center w-full px-24 py-12">
            <Link to="/">
                <div className="flex flex-row gap-3 items-center text-white text-4xl font-medium">
                    <FaPlay className="text-indigo-500 scale-105" />
                    <p>
                        Movie Noir
                    </p>
                </div>
            </Link>
            <ul className="flex flex-row gap-6 text-white text-2xl font-semibold">
                {headerLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={link.link} className={({ isActive }) => `${isActive ? "border-b-3 border-indigo-500" : "hover:border-b-3 border-indigo-500"}`}>
                                {link.text}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Header;