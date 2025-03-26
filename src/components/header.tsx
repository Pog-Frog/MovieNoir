import { FaPlay } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";


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

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="fixed top-0 z-5 w-full px-6 sm:px-10 md:px-16 lg:px-28 py-6 bg-black ">
            <div className="w-full h-full m-auto flex flex-row items-center justify-between">
                <Link to="/" className="shrink-0 relative z-[100] h-auto w-auto flex flex-row items-center">
                    <div className="flex flex-row gap-3 items-center text-white text-3xl md:text-4xl font-medium">
                        <FaPlay className="text-indigo-500 scale-105" />
                        <span>
                            Movie Noir
                        </span>
                    </div>
                </Link>
                <div
                    className={`absolute inset-0 h-screen px-6 sm:px-10 md:px-16 pt-20 bg-[#040018] flex flex-col gap-6 transition duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
                        } lg:relative lg:h-fit lg:p-0 lg:bg-transparent w-full lg:flex lg:flex-row lg:items-center lg:gap-0 lg:translate-x-0`}
                >
                    <nav className="lg:ml-auto lg:-translate-x-10">
                        <ul className="flex lg:flex-row flex-col gap-6 mt-8 lg:mt-0 text-white text-2xl font-semibold">
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
                    </nav>
                </div>
                <div className="block lg:hidden">
                    <Hamburger
                        toggled={menuOpen}
                        toggle={toggleMenu}
                        size={22}
                        color="white"
                        label="Menu Icon" />
                </div>
            </div>
        </div>
    );
}

export default Header;