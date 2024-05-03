import React from 'react'
import { CiBookmark } from "react-icons/ci";

// boomark logo 
function MediaBookmark({ onClick }) {
    return (
        <div
            onClick={onClick}
            className='absolute p-3 top-1 right-1 bg-black hover:bg-darkRed duration-100 cursor-pointer rounded-full z-10'>
            <CiBookmark />
        </div>
    )
}

export default MediaBookmark