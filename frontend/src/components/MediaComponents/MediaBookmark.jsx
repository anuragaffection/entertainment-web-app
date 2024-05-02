import React from 'react'
import { CiBookmark } from "react-icons/ci";

let count = 0;

function MediaBookmark({ singleMediaData }) {

    console.log(singleMediaData)
    console.log("total count", count)
    count++;

    // adding bookmark
    const postData = async () => {
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

            window.alert("Bookmark added ")

        } catch (error) {
            // console.error("Error posting media data:", error);
        }
    }


    return (
        <div
            onClick={() => postData}
            className='absolute p-3 top-1 right-1 bg-black hover:bg-darkRed duration-100 cursor-pointer rounded-full z-10'>
            <CiBookmark />
        </div>
    )
}

export default MediaBookmark