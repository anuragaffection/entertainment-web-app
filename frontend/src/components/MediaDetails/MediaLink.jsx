import React from 'react'
import { HiLink } from "react-icons/hi";
import { FaImdb } from "react-icons/fa";


function MediaLink({ mediaDetail }) {
    return (
        <div className="w-full flex gap-5">
            <button
                onClick={() => {
                    window.open(mediaDetail?.mediaData?.homepage);
                }}
                className={
                    "text-BodyS bg-waikawaGrey px-3 py-2 rounded-md flex gap-3 items-center focus:outline-none md:text-BodyM lg:text-HeadingM lg:font-light lg:gap-6 lg:px-6 cursor-pointer " +
                    (mediaDetail?.mediaData?.homepage === "" ||
                        !mediaDetail?.mediaData?.homepage
                        ? "hidden"
                        : "flex")
                }>
                <span>Website</span>
                <HiLink />
            </button>
            <button
                onClick={() => {
                    window.open(
                        "https://www.imdb.com/title/" +
                        mediaDetail?.mediaData?.imdb_id
                    );
                }}
                className={
                    "text-BodyS bg-waikawaGrey px-3 py-2 rounded-md flex gap-3 items-center focus:outline-none md:text-BodyM lg:text-HeadingM lg:font-light lg:gap-6 lg:px-6 cursor-pointer " +
                    (mediaDetail?.mediaData?.imdb_id === "" ||
                        !mediaDetail?.mediaData?.imdb_id
                        ? "hidden"
                        : "flex")
                }>
                <span>IMDB</span>
                <FaImdb />
            </button>
        </div>
    )
}

export default MediaLink