// from installed packages 
import React from 'react'
import { TbDeviceTvOld } from "react-icons/tb";
import { MdLocalMovies } from "react-icons/md";
import { LuDot } from "react-icons/lu";

// media information or media headings 
function MediaInfo({ singleMediaData }) {
    const mediaTypeCaptial = singleMediaData.mediaType ? singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1) : "NA";
    return (
        <div className="px-1">
            <div className="flex gap-1 items-center">
                <span> {singleMediaData.releaseDate ? singleMediaData.releaseDate.split('-')[0] : 'NA'}</span>
                <LuDot />
                <span> {singleMediaData.mediaType === 'movie' ? <MdLocalMovies /> : <TbDeviceTvOld />}</span>
                <span> {singleMediaData.mediaType ? mediaTypeCaptial : "NA"}
                </span>
                <LuDot />
                <span> {singleMediaData.isAdult ? "18+" : "PG"}</span>
            </div>
            <span> {singleMediaData.title ? singleMediaData.title : "NA"}</span>
        </div>
    )
}

export default MediaInfo