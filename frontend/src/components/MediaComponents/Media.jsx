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
    const [bookmarkStatus, setBookmarkStatus] = useState(null)
    


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
    }, [bookmarkStatus]);


    const deleteBookmark = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/media/bookmark/delete/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            setBookmarkStatus(id)
            window.alert("Deleted ")
        } catch (error) {
            window.alert("error in deleting ")
            // console.error("Error in bookmark deleting :", error);
        }
    }


    // adding bookmark
    const postData = async (singleMediaData) => {
        try {
            const { id, title, image, isAdult, mediaType, releaseDate } = singleMediaData;

            await axios.post(`http://localhost:8000/api/media/bookmark/add`, {
                id: id,
                title: title,
                image: image,
                isAdult: isAdult,
                mediaType: mediaType,
                releaseDate: releaseDate,
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });

            setBookmarkStatus(id)

            window.alert("Bookmark added ")

        } catch (error) {
            window.alert("Error Adding")
            // console.error("Error posting media data:", error);
        }
    }



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
                                    <MediaBookmarked
                                        onClick={() => {
                                            deleteBookmark(singleMediaData.id)
                                        }}
                                    />
                                ) : (
                                    <MediaBookmark
                                        onClick={() => {
                                            postData(singleMediaData);
                                        }}
                                    />
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