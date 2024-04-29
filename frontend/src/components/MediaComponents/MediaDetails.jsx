import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { DNA } from "react-loader-spinner";
import { HiLink } from "react-icons/hi";
import { FaImdb } from "react-icons/fa";
import axios from "axios";
import MediaRatings from "./MediaRatings";

// Backend must be running
const tmdbActionUrl = 'http://localhost:8000/api';

// fecthing data from api 
function useFetchMediaDetail(mediaId, mediaType) {
    const [mediaDetail, setMediaDetail] = useState(null);
    useEffect(() => {
        const fetchMediaDetail = async () => {
            try {
                if (mediaId && mediaType) {
                    const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/detail/${mediaId}`);
                    setMediaDetail(data.data);
                }
            } catch (error) {
                console.error("Error fetching media detail:", error);
            }
        };
        fetchMediaDetail();
    }, [mediaId, mediaType]);
    return mediaDetail;
}


// used for fetching movie details 
// used for fetching tv show details 
function MediaDetails() {
    const navigate = useNavigate();
    const location = useLocation();

    const mediaType = location.pathname.split('/')[1];
    const { mediaId } = useParams();

    // Fetch media detail
    const mediaDetail = useFetchMediaDetail(mediaId, mediaType);

    return (
        <div className="mr-2 py-6 px-2 bg-leanblue">
            <button
                onClick={() => navigate(`/${mediaType}`)}
                className="mb-4 px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
            >
                <span>Go Back</span>
            </button>
            {
                mediaDetail ? (
                    <div className=" flex flex-col sm:flex-row gap-8 justify-evenly">
                        {/* Render media image */}
                        <img
                            src={"https://image.tmdb.org/t/p/w500" + mediaDetail.mediaData.image}
                            className="h-full w-1/3 p-1 mt-1 rounded-lg"
                            alt="img"
                        />

                        <div className="text-white flex flex-col gap-6 md:gap-8 lg:gap-10">
                            {/* media headings */}
                            <div>
                                <p className="text-HeadingXS md:text-HeadingM lg:text-HeadingL font-bold">
                                    {mediaDetail?.mediaData?.title}
                                </p>
                                <p className="text-BodyS md:text-BodyM lg:text-HeadingXS">
                                    {mediaDetail?.mediaData?.tagline}
                                </p>
                            </div>

                            {/* ratings  */}
                            <div className="flex items-center gap-4">
                                <p className="text-BodyM md:text-HeadingXS lg:text-HeadingL">
                                    {mediaDetail?.mediaData?.rating.toFixed(1)}
                                </p>
                                <MediaRatings rating={Math.round(mediaDetail?.mediaData?.rating)} />
                            </div>

                            {/* Render media details */}
                            <div className="flex gap-10 font-medium text-BodyS md:text-BodyM lg:text-HeadingXS">
                                <p className="flex flex-col">
                                    <span className="text-waikawaGrey">Length</span>
                                    <span>{mediaDetail?.mediaData?.runtime + " "} min</span>
                                </p>
                                <p className="flex flex-col">
                                    <span className="text-waikawaGrey">Language</span>
                                    <span>{mediaDetail?.mediaData?.language[0]}</span>
                                </p>
                                <p className="flex flex-col">
                                    <span className="text-waikawaGrey">Year</span>
                                    <span>
                                        {mediaDetail?.mediaData?.release_date?.split("-")[0]}
                                    </span>
                                </p>
                                <p className="flex flex-col">
                                    <span className="text-waikawaGrey">Status</span>
                                    <span>{mediaDetail?.mediaData?.status}</span>
                                </p>
                            </div>

                            {/* Render media genres */}
                            <div className="w-full flex flex-col gap-1 lg:gap-3">
                                <p className="text-BodyM font-bold md:text-HeadingXS lg:text-HeadingM">
                                    Genres
                                </p>
                                <div className="full text-BodyS flex gap-3 md:text-BodyM lg:text-HeadingXS">
                                    {mediaDetail?.mediaData?.genres.map((genre) => (
                                        <p
                                            key={genre}
                                            className="bg-white text-leanBlue px-3 py-1 rounded-md">
                                            {genre}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Render media synopsis */}
                            <div className="w-full flex flex-col gap-2">
                                <p className="text-BodyM font-bold md:text-HeadingXS lg:text-HeadingM">
                                    Synopsis
                                </p>
                                <p className="text-BodyS md:text-BodyM lg:text-HeadingXS">
                                    {mediaDetail?.mediaData?.overview}
                                </p>
                            </div>

                            {/* Render media casts */}
                            <div className="w-full flex flex-col gap-2">
                                <p className="text-BodyM font-bold md:text-HeadingXS lg:text-HeadingM">
                                    Casts
                                </p>
                                <div className="w-full text-BodyS flex flex-wrap gap-3 md:text-BodyM lg:text-HeadingXS">
                                    {mediaDetail?.cast.map((cast) => (
                                        <p
                                            key={cast}
                                            className="border-2 border-white px-3 py-1 rounded-md">
                                            {cast}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* external Links */}
                            <div className="w-full flex gap-5">
                                <button
                                    onClick={() => {
                                        window.open(mediaDetail?.mediaData?.homepage);
                                    }}
                                    className={
                                        "text-BodyS bg-waikawaGrey px-3 py-2 rounded-md flex gap-3 items-center focus:outline-none md:text-BodyM lg:text-HeadingM lg:font-light lg:gap-6 lg:px-6 cursor-pointer " +
                                        (mediaDetail?.mediaData?.homepage === "" ||
                                            !mediaDetail?.mediaData?.homepage
                                            ? "hidden"
                                            : "flex")
                                    }>
                                    <span>Website</span>
                                    <HiLink />
                                </button>
                                <button
                                    onClick={() => {
                                        window.open(
                                            "https://www.imdb.com/title/" +
                                            mediaDetail?.mediaData?.imdb_id
                                        );
                                    }}
                                    className={
                                        "text-BodyS bg-waikawaGrey px-3 py-2 rounded-md flex gap-3 items-center focus:outline-none md:text-BodyM lg:text-HeadingM lg:font-light lg:gap-6 lg:px-6 cursor-pointer " +
                                        (mediaDetail?.mediaData?.imdb_id === "" ||
                                            !mediaDetail?.mediaData?.imdb_id
                                            ? "hidden"
                                            : "flex")
                                    }>
                                    <span>IMDB</span>
                                    <FaImdb />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    // If mediaDetail is not available, render loading spinner
                    <div className="flex items-center justify-center">
                        <DNA height={100} width={100} />
                    </div>
                )
            }
        </div>
    );
}

export default MediaDetails;
