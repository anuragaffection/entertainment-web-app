import React from 'react'

// some extra details of single media
function MediaInfo({ mediaDetail }) {
    return (
        <div className="flex gap-10 font-medium text-BodyS md:text-BodyM lg:text-HeadingXS" >
            <p className="flex flex-col">
                <span className="text-waikawaGrey">Length</span>
                <span>{mediaDetail?.mediaData?.runtime + " "} min</span>
            </p>
            <p className="flex flex-col">
                <span className="text-waikawaGrey">Language</span>
                <span>{mediaDetail?.mediaData?.language[0]}</span>
            </p>
            <p className="flex flex-col">
                <span className="text-waikawaGrey">Year</span>
                <span>
                    {mediaDetail?.mediaData?.release_date?.split("-")[0]}
                </span>
            </p>
            <p className="flex flex-col">
                <span className="text-waikawaGrey">Status</span>
                <span>{mediaDetail?.mediaData?.status}</span>
            </p>
        </div >
    )
}

export default MediaInfo