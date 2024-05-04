// from installed packages
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

// importing media components 
import MediaImage from './MediaImage';
import MediaBookmark from './MediaBookmark';
import MediaBookmarked from './MediaBookmarked';
import MediaInfo from './MediaInfo';
import MediaPlay from './MediaPlay';

// context 7 base url 
import MyContext from '../../context/MyContext';
import baseUrl from '../../utils/baseUrl'



// media components 
function Media({ mediaData }) {
    const { isAuthenticated, setToast, setToastMessage } = useContext(MyContext)
    const [isHovered, setIsHovered] = useState(null)
    const [bookmarkedIds, setBookmarkedIds] = useState([]);
    const [bookmarkStatus, setBookmarkStatus] = useState(null)

    // fetching bookmark data to find id 
    useEffect(() => {
        if (isAuthenticated) {
            const fetchData = async () => {
                try {
                    const { data } = await axios.get(`${baseUrl}/media/bookmark/get`, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        withCredentials: true,
                    });
                    setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
                } catch (error) {
                    // console.error("Error fetching media data:", error);
                }
            }
            fetchData();
        }
    }, [bookmarkStatus, isAuthenticated]);


    // deleting bookmark 
    const deleteBookmark = async (id) => {
        try {
            await axios.delete(`${baseUrl}/media/bookmark/delete/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            setBookmarkStatus(id)
            setToast(true)
            setToastMessage("Bookmark Deleted Successfully")
        } catch (error) {
            setToast(true)
            setToastMessage("Error Happened")
            // window.alert("error in deleting ")
            // console.error("Error in bookmark deleting :", error);
        }
    }


    // adding bookmark
    const postData = async (singleMediaData) => {

        if (isAuthenticated) {
            try {
                // taking data from singleMediaData 
                const { id, title, image, isAdult, mediaType, releaseDate } = singleMediaData;

                await axios.post(`${baseUrl}/media/bookmark/add`, {
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
                setToast(true)
                setToastMessage("Bookmark added Successfully")
                // window.alert("Bookmark added ")
            } catch (error) {
                setToast(true)
                setToastMessage("Error Happened")
                // window.alert("Error Adding")
                // console.error("Error posting media data:", error);
            }
        } else {
            setToast(true)
            setToastMessage("No Account Found")
        }
    }

    // render media
    return (
        <>
            {
                mediaData && mediaData.map((singleMediaData) => (
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
                                        onClick={() => { deleteBookmark(singleMediaData.id) }}
                                    />
                                ) : (
                                    <MediaBookmark
                                        onClick={() => { postData(singleMediaData); }}
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