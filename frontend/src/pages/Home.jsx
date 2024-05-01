import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Movie from './Movie';
import Tv from './Tv';

import MediaCard from '../components/MediaComponents/MediaCard';
import MediaBookmark from '../components/MediaComponents/MediaBookmark';

import { DNA } from "react-loader-spinner";
import { MdLocalMovies } from 'react-icons/md';
import { TbDeviceTvOld } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { IoPlayCircle } from "react-icons/io5";


// backend must be running 
const tmdbActionUrl = 'http://localhost:8000/api';

function Home() {
    const [mediaData, setMediaData] = useState([]);
    const [isHovered, setIsHovered] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${tmdbActionUrl}/media/trending/1`);
                setMediaData(data.data);
            } catch (error) {
                console.error("Error fetching media data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className='p-4 mt-2 flex flex-col gap-6'>
                <h1 className="text-4xl font-bold">Trending Media </h1>
                {
                    mediaData.length > 0 ? (
                        // trending media 
                        <div className="flex gap-5 scrollbar-corner-transparent scrollbar scrollbar-thumb-darkRed scrollbar-track-transparent overflow-x-scroll">
                            {mediaData.map((singleMediaData) => (
                                <div key={singleMediaData.id} className="flex flex-col gap-2">
                                    <div
                                        className="relative w-56"
                                        onMouseEnter={() => setIsHovered(singleMediaData.id)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        <MediaCard
                                            singleMediaData={singleMediaData}
                                           
                                            mediaType={"Movie"}
                                        />

                                        <MediaBookmark />

                                        {isHovered === singleMediaData.id && (
                                            <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
                                                <button
                                                    onClick={() => navigate(`/movie/${singleMediaData.id}`)}
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
                                            {singleMediaData.mediaType === 'movie' ? <MdLocalMovies /> : <TbDeviceTvOld />}

                                            <span>{singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1)}</span>
                                            <LuDot />
                                            <span>{singleMediaData.isAdult ? "18+" : "PG"}</span>
                                        </div>
                                        <span> {singleMediaData.title} </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    ) : (
                        // If mediaData is not available, render loading spinner
                        <div className="w-full h-4/5 flex items-center justify-center">
                            <DNA height={100} width={100} />
                        </div>
                    )}
            </div>
            <Movie />
            <Tv />
        </>
    )
}

export default Home;
