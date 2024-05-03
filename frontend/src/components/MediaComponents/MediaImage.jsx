import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

// Media image
function MediaImage({ singleMediaData, mediaType }) {
    const [mediaImage, setMediaImage] = useState(null);

    // fetch extra high quality image 
    useEffect(() => {
        let isMounted = true;
        const fetchImage = async () => {
            try {
                const { data } = await axios.get(`${baseUrl}/media/${mediaType}/image/${singleMediaData.id}`);
                if (isMounted) {
                    setMediaImage(data.imagePath);
                }
            } catch (error) {
                // console.error("Error fetching multi-media:", error);
                setMediaImage(null);
            }
        };
        const timer = setTimeout(() => {
            fetchImage();
        }, 2000);
        return () => {
            clearTimeout(timer);
            isMounted = false;
        };
    }, [singleMediaData.id, mediaType]);

    // render image 
    return (
        <div className="w-full h-24 sm:h-32 rounded-lg">
            {mediaImage ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500/${mediaImage}`}
                    className="w-full h-full rounded-lg"
                    alt="img"
                />
            ) : (
                singleMediaData.image ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${singleMediaData.image}`}
                        className="w-full h-full rounded-lg"
                        alt="img"
                    />
                ) : (
                    <div className='w-full h-full rounded-xl bg-black flex justify-center items-center'>
                        <span>No Image Preview</span>
                    </div>
                )
            )}
        </div>
    );
}

export default MediaImage;
