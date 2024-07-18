// from installed packages 
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoPlayCircle } from "react-icons/io5";

// media play buttons 
function MediaPlay({ singleMediaData }) {

    // routing instances 
    const navigate = useNavigate();

    return (
        <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
            <button
                onClick={() => navigate(`/${singleMediaData.mediaType}/${singleMediaData.id}`)}
                className="px-6 py-2 flex gap-3 items-center bg-gray-950 hover:bg-cyan-500 hover:text-black text-lg font-semibold rounded-full duration-100"
            >
                <IoPlayCircle />
                <span>Play</span>
            </button>
        </div>
    )
}

export default MediaPlay