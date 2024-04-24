import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import axios from 'axios'

// import { useFetchMultiMedia } from "../service/tmdb.service";
import MediaCard from '../components/MediaComponents/MediaCard'

// backned must be running 
const tmdbActionUrl = 'http://localhost:8000/api'


// Fetch multiple media based on type (e.g., movie, TV show)
const useFetchMultiMedia = async (page, setMediaData, mediaType) => {
    try {
        const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/${page}`);
        setMediaData(data.data);
    } catch (error) {
        // Log error if fetching fails
        // console.error("Error fetching multi-media:", error);
    }
};


const Movie = () => {
    // Fetch movie data using custom hook
    const fetchMovie = useFetchMultiMedia;

    // State to store fetched media data
    const [mediaData, setMediaData] = useState(null);

    // Fetch movie data when component mounts
    // we can change the page 
    useEffect(() => {
        setTimeout(() => {
            fetchMovie(1, setMediaData, "movie");
        }, 2000);
    }, [fetchMovie]);

    console.log(mediaData)

    // Render Movie component
    return (
        <div className="p-4">
            {mediaData ? (
                // If mediaData is available, render movie cards
                <>
                    <p className="">
                        Movie
                    </p>
                    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
                        {mediaData.map((singleMediaData) => (
                            <div
                                key={singleMediaData.id}
                            >
                                <MediaCard
                                    singleMediaData={singleMediaData}
                                    fieldType={"movie"}
                                    mediaType={"Movie"}
                                />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                // If mediaData is not available, render loading spinner
                <div className="w-full h-4/5 flex items-center justify-center">
                    <DNA height={100} width={100} />
                </div>
            )}
        </div>
    );
};

export default Movie;