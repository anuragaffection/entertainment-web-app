import React from 'react'

function MediaCast({ mediaDetail }) {
    return (
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
    )
}

export default MediaCast