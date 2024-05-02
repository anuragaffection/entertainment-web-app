import React, { useEffect, useState } from 'react'
import axios from 'axios'

// importing media components 
import MediaImage from './MediaImage';
import MediaBookmark from './MediaBookmark';
import MediaBookmarked from './MediaBookmarked';
import MediaInfo from './MediaInfo';
import MediaPlay from './MediaPlay';


function Media({ mediaData }) {

    const [isHovered, setIsHovered] = useState(null)
    const [bookmarkedIds, setBookmarkedIds] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/api/media/bookmark/get`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                });
                setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
            } catch (error) {
                console.error("Error fetching media data:", error);
            }
        }
        fetchData();
    }, []);



    return (
        <>
            {
                mediaData.map((singleMediaData) => (
                    <div
                        key={singleMediaData.id}
                        className="flex flex-col gap-2"
                    >
                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovered(singleMediaData.id)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {/* media image  */}
                            <MediaImage
                                singleMediaData={singleMediaData}
                                mediaType={"Movie"}
                            />
                        
                            {
                                // media bookmark 
                                bookmarkedIds.includes(singleMediaData.id) ? (
                                    <MediaBookmarked singleMediaData={singleMediaData} />
                                ) : (
                                    <MediaBookmark singleMediaData={singleMediaData} />
                                )
                            }

                            {
                                // media play button 
                                isHovered === singleMediaData.id && (
                                    <MediaPlay singleMediaData={singleMediaData} />
                                )
                            }

                        </div>

                        {/* media info */}
                        <MediaInfo singleMediaData={singleMediaData} />
                    </div>
                ))
            }

        </>
    )
}

export default Media