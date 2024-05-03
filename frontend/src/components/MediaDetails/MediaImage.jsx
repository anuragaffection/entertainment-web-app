import React from 'react'

// image details of single media 
function MediaImage({ mediaDetail }) {
    return (
        mediaDetail.mediaData.image ? (
            <img
                src={"https://image.tmdb.org/t/p/w500" + mediaDetail.mediaData.image}
                className="h-full w-1/3 p-1 mt-1 rounded-lg"
                alt="img"
            />
        ) : (
            <div className='w-full h-full rounded-xl bg-black flex justify-center items-center'>
                <span>No Image Preview</span>
            </div>
        )

    )
}

export default MediaImage