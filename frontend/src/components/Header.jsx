// importing from installed packages 
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { HiBookmark } from "react-icons/hi2";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";

// from custom files 
import userImage from '../assets/userImage.jpg'
import userLogo from '../assets/userLogo.jpg'
import MyContext from '../context/MyContext'

// Header component
const Header = () => {
    const { isAuthenticated } = useContext(MyContext)

    // Using react-router-dom hooks for navigation and getting current location
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { mediaType } = useParams();

    return (
        // Header container with responsive styling
        <div className="w-11/12 mx-auto sticky top-0 h-fit rounded-xl bg-deepBlue flex px-2 py-3 z-50 items-center justify-between lg:h-[99%] lg:w-[5%] lg:flex-col ">

            {/* Movie icon */}
            <MdMovie className="p-1 text-darkRed text-3xl md:text-4xl ring-1 ring-darkRed rounded-full" />

            {/* Navigation links */}
            <div className="flex lg:flex-col w-2/3 h-fit lg:h-2/3 items-center justify-center lg:justify-start text-xl md:text-2xl lg:text-3xl gap-6 lg:gap-8 ">

                {/* Home link */}
                <AiFillAppstore
                    onClick={() => navigate("/")}
                    className={
                        "hover:text-darkRed cursor-pointer " +
                        (pathname === "/" || mediaType === "multi"
                            ? "text-darkRed"
                            : "text-waikawaGrey")
                    }
                />

                {/* Movie link */}
                <MdLocalMovies
                    onClick={() => navigate("/movie")}
                    className={
                        "hover:text-darkRed cursor-pointer " +
                        (pathname === "/movie" || mediaType === "movie"
                            ? "text-darkRed"
                            : "text-waikawaGrey")
                    }
                />

                {/* TV link */}
                <TbDeviceTvOld
                    onClick={() => navigate("/tv")}
                    className={
                        "hover:text-darkRed cursor-pointer " +
                        (pathname === "/tv" || mediaType === "tv"
                            ? "text-darkRed"
                            : "text-waikawaGrey")
                    }
                />

                {/* Bookmarks link */}
                <HiBookmark
                    onClick={() => navigate("/bookmarks")}
                    className={
                        "hover:text-darkRed cursor-pointer " +
                        (pathname === "/bookmarks" || mediaType === "bookmarks"
                            ? "text-darkRed"
                            : "text-waikawaGrey")
                    }
                />
            </div>

            {/* profile button */}
            <button
                onClick={() => navigate("/profile")}
                className="h-fit w-fit ring-darkRed ring-1 rounded-full p-1">
                {/* User profile image */}
                {
                    isAuthenticated ? <img
                        className="rounded-full h-8 w-8 lg:w-10 lg:h-10"
                        src={userImage}
                        alt="user Image"
                    /> : <img
                        className="rounded-full h-8 w-8 lg:w-10 lg:h-10"
                        src={userLogo}
                        alt="user Image"
                    />
                }

            </button>

        </div>
    );
};

export default Header; 
