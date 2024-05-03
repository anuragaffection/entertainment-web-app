import React from 'react'

// heading details of single media 
function MediaHeading({ mediaDetail }) {
    return (
        <div>
            <p className="text-HeadingXS md:text-HeadingM lg:text-HeadingL font-bold">
                {mediaDetail?.mediaData?.title}
            </p>
            <p className="text-BodyS md:text-BodyM lg:text-HeadingXS">
                {mediaDetail?.mediaData?.tagline}
            </p>
        </div>
    )
}

export default MediaHeading