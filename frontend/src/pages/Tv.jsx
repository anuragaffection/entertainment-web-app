import { useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { TbDeviceTvOld } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { IoPlayCircle } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { useQuery } from 'react-query';
import axios from 'axios'
import MediaCard from '../components/MediaComponents/MediaCard'
import MediaBookmark from "../components/MediaComponents/MediaBookmark";

// backend must be running 
const tmdbActionUrl = 'http://localhost:8000/api'

// Fetch multiple media based on type (e.g., Tv, TV show)
const fetchMultiMedia = async (page, mediaType) => {
    const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/${page}`);
    return data.data;
};

const Tv = () => {
    const navigate = useNavigate();

    const { data: mediaData, isLoading, isError } = useQuery(['media', 'Tv'], () => fetchMultiMedia(1, "Tv"));

    const [isHovered, setIsHovered] = useState(null)

    if (isLoading) return <DNA height={100} width={100} />;
    if (isError) return <div>Error fetching data</div>;

    // Render Tv component
    return (
        <div className="p-4 mt-2 flex flex-col gap-6">
            <h1 className="text-4xl font-bold">Explore Tv</h1>

            <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
                {mediaData.map((singleMediaData) => (
                    <div key={singleMediaData.id} className="flex flex-col gap-2">
                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovered(singleMediaData.id)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            <MediaCard
                                singleMediaData={singleMediaData}
                                mediaType={"Tv"}
                            />

                            <MediaBookmark />

                            {isHovered === singleMediaData.id && (
                                <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
                                    <button
                                        onClick={() => navigate(`/tv/${singleMediaData.id}`)}
                                        className="px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
                                    >
                                        <IoPlayCircle />
                                        <span>Play</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="px-1">
                            <div className="flex gap-1 items-center">
                                <span> {singleMediaData.releaseDate.split('-')[0] || 'Unknown'} </span>
                                <LuDot />
                                <TbDeviceTvOld />
                                <span>{singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1)}</span>
                                <LuDot />
                                <span>{singleMediaData.isAdult ? "18+" : "PG"}</span>
                            </div>
                            <span> {singleMediaData.title} </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Tv;
