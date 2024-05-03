import React from 'react'

function MediaImage({ mediaDetail }) {
    return (
        <img
            src={"https://image.tmdb.org/t/p/w500" + mediaDetail.mediaData.image}
            className="h-full w-1/3 p-1 mt-1 rounded-lg"
            alt="img"
        />

    )
}

export default MediaImage