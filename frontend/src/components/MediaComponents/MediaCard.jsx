import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";

import axios from 'axios'


// import { useFetchTMDBImage } from "../utils/useFetchTMDBImage.utils"; // Custom hook for fetching images
// import { useDispatch, useSelector } from "react-redux";
// import { addBookmark, removeBookmark } from "../store/bookmarkSlice"; // Redux actions for adding/removing bookmarks



const tmdbActionUrl = 'http://localhost:8000/api'

const useFetchMediaImage = async (movieId, setMediaImage, mediaType) => {
    try {
        const data = await axios.get(`${tmdbActionUrl}/media/${mediaType}/image/${movieId}`);
        setMediaImage(data.data.imagePath);
    } catch (error) {
        // Log error if fetching fails
        // console.error("Error fetching multi-media:", error);
    }
};



// where we are using fieldType 
function MediaCard({ singleMediaData, fieldType, mediaType }) {

    const fetchImage = useFetchMediaImage;

    // State to store fetched media data
    const [mediaImage, setMediaImage] = useState(null);

    // Fetch movie data when component mounts
    // we can change the page 
    useEffect(() => {
        setTimeout(() => {
            fetchImage(singleMediaData.id, setMediaImage, mediaType);
        }, 2000);
    }, [fetchImage]);


    console.log(mediaImage)

    // console.log(singleMediaData)
    // console.log(fieldType)
    // console.log(mediaType)

    return (
        <>
            {
                mediaImage ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${mediaImage}`}
                        className="w-full h-24 sm:h-32 rounded-xl "
                        alt="img"
                    />
                ) : (
                    <div className='w-full h-24 sm:h-32 rounded-xl bg-black flex justify-center items-center'>
                        <span>No Image Preview</span>
                    </div>
                )
            }
        </>
    )
}

export default MediaCard