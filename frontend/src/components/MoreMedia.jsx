// importing from installed packages 
import React from "react";
import { useQuery } from 'react-query';
import { DNA } from "react-loader-spinner";

import Media from "./MediaComponents/Media";
import fetchMultiMedia from "../utils/fetchMultiMedia";


function MoreMedia({ currentPage, mediaType }) {

    // fetching media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([currentPage, mediaType], () => fetchMultiMedia(currentPage, mediaType));

    // render loading or error 
    if (isLoading) return <DNA height={50} width={50} />;
    if (isError) return <div>Error fetching data</div>;

    // css style 
    const wrapperStyle = "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"

    // Render Movie media 
    return (
        <div className={wrapperStyle}>
            <Media mediaData={mediaData} />
        </div>
    );
}

export default MoreMedia