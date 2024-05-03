// from installed packages 
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

// from custom files 
import Loading from './CssComponents/Loading';
import Media from '../components/MediaComponents/Media'

// base url 
import baseUrl from '../utils/baseUrl';

// search result page 
function SearchResult() {

    const { mediaType, searchQuery } = useParams();
    const [mediaData, setMediaData] = useState([]);

    // fetching search result 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${baseUrl}/media/${mediaType}/search/${searchQuery}`);
                setMediaData(data.data);
            } catch (error) {
                // console.error("Error fetching media data:", error);
            }
        }
        fetchData();
    }, [mediaType, searchQuery]);


    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";
    const wrapperStyle = "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"


    return (
        <div className={containerStyle}>
            <h1 className={headingStyle}> Result for {searchQuery} </h1>
            {
                mediaData && mediaData.length > 0 ? (
                    <div className={wrapperStyle}>
                        <Media mediaData={mediaData} />
                    </div>

                ) : (
                    <Loading />
                )}
        </div>
    )
}

export default SearchResult