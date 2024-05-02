import React from "react";
import { useQuery } from 'react-query';

import Loading from "../components/CssComponents/Loading";
import Media from "../components/MediaComponents/Media";
import fetchMultiMedia from "../utils/fetchMultiMedia";


const Movie = () => {
    
    // fetching media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([1, 'movie'], () => fetchMultiMedia(1, "movie"));

    // render loading or error 
    if (isLoading) return <Loading />;
    if (isError) return <div>Error fetching data</div>;

    // Render Movie media 
    return (
        <div className="p-4 mt-2 flex flex-col gap-6">
            <h1 className="text-4xl font-bold">Explore Movie</h1>
            <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
                <Media mediaData={mediaData} />
            </div>
        </div>
    );
};

export default Movie;
