import React, { useEffect, useState } from 'react'
import axios from 'axios'

const tmdbActionUrl = 'http://localhost:8000/api'

const useFetchMediaImage = async (movieId, setMediaImage, mediaType) => {
    try {
        const data = await axios.get(`${tmdbActionUrl}/media/${mediaType}/image/${movieId}`);
        setMediaImage(data.data.imagePath);
    } catch (error) {
        // Log error if fetching fails
        // console.error("Error fetching multi-media:", error);
    }
};

// where we are using fieldType 
function MediaCard({ singleMediaData, fieldType, mediaType }) {

    const fetchImage = useFetchMediaImage;
    const [mediaImage, setMediaImage] = useState(null);

    // Fetch movie data when component mounts
    // we can change the page 
    useEffect(() => {
        setTimeout(() => {
            fetchImage(singleMediaData.id, setMediaImage, mediaType);
        }, 2000);
    }, [fetchImage]);

    return (
        <>
            {
                mediaImage ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${mediaImage}`}
                        className="w-full h-24 sm:h-32 rounded-lg"
                        alt="img"
                    />
                ) : (
                    singleMediaData.image ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${singleMediaData.image}`}
                            className="w-full h-24 sm:h-32 rounded-lg"
                            alt="img"
                        />
                    ) : (
                        <div className='w-full h-24 sm:h-32 rounded-xl bg-black flex justify-center items-center'>
                            <span>No Image Preview</span>
                        </div>
                    )
                )
            }
        </>
    )
}

export default MediaCard