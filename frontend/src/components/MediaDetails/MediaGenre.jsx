import React from 'react'

// genre details of singleMedia 
function MediaGenre({ mediaDetail }) {
    return (
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
    )
}

export default MediaGenre