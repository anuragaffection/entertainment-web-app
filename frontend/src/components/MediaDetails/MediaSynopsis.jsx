import React from 'react'

function MediaSynopsis({mediaDetail}) {
    return (
        <div className="w-full flex flex-col gap-2">
            <p className="text-BodyM font-bold md:text-HeadingXS lg:text-HeadingM">
                Synopsis
            </p>
            <p className="text-BodyS md:text-BodyM lg:text-HeadingXS">
                {mediaDetail?.mediaData?.overview}
            </p>
        </div>
    )
}

export default MediaSynopsis