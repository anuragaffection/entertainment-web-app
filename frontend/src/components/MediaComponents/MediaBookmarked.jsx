import React from 'react';
import { FaBookmark } from "react-icons/fa";

function MediaBookmarked({ onClick }) {
    return (
        <div
            onClick={onClick}
            className='absolute p-3 top-1 right-1 bg-black hover:bg-darkRed duration-100 cursor-pointer rounded-full z-10'>
            <FaBookmark />
        </div>
    )
}

export default MediaBookmarked;






// import React from 'react';
// import axios from 'axios';
// import { FaBookmark } from "react-icons/fa";


// function MediaBookmarked({ singleMediaData }) {

//     // deleting bookmark or removing bookmark
//     const deleteBookmark = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8000/api/media/bookmark/delete/${id}`, {
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true,
//             });
//         } catch (error) {
//             // console.error("Error in bookmark deleting :", error);
//         }
//     }

//     return (
//         <div
//             onClick={() => deleteBookmark(singleMediaData.id)}
//             className='absolute p-3 top-1 right-1 bg-black hover:bg-darkRed duration-100 cursor-pointer rounded-full z-10'>
//             <FaBookmark />
//         </div>
//     )
// }

// export default MediaBookmarked;

