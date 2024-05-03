// import { useState, useEffect } from "react";
// import { DNA } from "react-loader-spinner";
// import { useNavigate } from "react-router-dom";
// import { MdLocalMovies } from "react-icons/md";
// import { LuDot } from "react-icons/lu";
// import { IoPlayCircle } from "react-icons/io5";
// import { useQuery, useMutation, queryCache } from 'react-query'; // Added useMutation and queryCache
// import axios from 'axios'
// import MediaCard from '../components/MediaComponents/MediaCard'
// import MediaBookmark from "../components/MediaComponents/MediaBookmark";
// import MediaBookmarked from "../components/MediaComponents/MediaBookmarked";


// // backend must be running 
// const tmdbActionUrl = 'http://localhost:8000/api'

// // Fetch multiple media based on type (e.g., movie, TV show)
// const fetchMultiMedia = async (page, mediaType) => {
//     const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/${page}`);
//     return data.data;
// };

// const Movie = () => {
//     const navigate = useNavigate();

//     const [isHovered, setIsHovered] = useState(null)
//     const [bookmarkData, setBookmarkData] = useState({})
//     const [bookmarkedIds, setBookmarkedIds] = useState([]);

//     const {
//         data: mediaData,
//         isLoading,
//         isError,
//         refetch, // Added refetch function

//     } = useQuery(['media', 'movie'], () => fetchMultiMedia(1, "movie"));

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const { data } = await axios.get(`http://localhost:8000/api/media/bookmark/get`, {
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     withCredentials: true,
//                 });
//                 setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
//             } catch (error) {
//                 console.error("Error fetching media data:", error);
//             }
//         }
//         fetchData();
//     }, [bookmarkData]);

//     const { mutate: addBookmark } = useMutation( // Added useMutation for adding bookmark
//         (bookmarkData) =>
//             axios.post(`http://localhost:8000/api/media/bookmark/add`, bookmarkData, {
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true,
//             }),
//         {
//             onSuccess: () => {
//                 refetch(); // Refetch mediaData after successful bookmark addition
//             }
//         }
//     );

//     const { mutate: removeBookmark } = useMutation( // Added useMutation for removing bookmark
//         (id) =>
//             axios.delete(`http://localhost:8000/api/media/bookmark/delete/${id}`, {
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true,
//             }),
//         {
//             onSuccess: () => {
//                 refetch(); // Refetch mediaData after successful bookmark removal
//             }
//         }
//     );

//     const handleBookmark = (singleMediaData) => {
//         if (bookmarkedIds.includes(singleMediaData.id)) {
//             removeBookmark(singleMediaData.id); // Remove bookmark if already bookmarked
//         } else {
//             addBookmark(singleMediaData); // Add bookmark if not bookmarked
//         }
//     };

//     if (isLoading) return <DNA height={100} width={100} />;
//     if (isError) return <div>Error fetching data</div>;

//     // Render Movie component
//     return (
//         <div className="p-4 mt-2 flex flex-col gap-6">
//             <h1 className="text-4xl font-bold">Explore Movie</h1>


//             <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
//                 {mediaData.map((singleMediaData) => (
//                     <div key={singleMediaData.id} className="flex flex-col gap-2">
//                         <div
//                             className="relative"
//                             onMouseEnter={() => setIsHovered(singleMediaData.id)}
//                             onMouseLeave={() => setIsHovered(null)}
//                         >
//                             <MediaCard
//                                 singleMediaData={singleMediaData}
//                                 mediaType={"Movie"}
//                             />

//                             {
//                                 bookmarkedIds.includes(singleMediaData.id) ? (
//                                     <MediaBookmarked
//                                         singleMediaData={singleMediaData}
//                                     />
//                                 ) : (
//                                     <MediaBookmark
//                                         onClick={() => handleBookmark(singleMediaData)} // Updated onClick event
//                                     />
//                                 )
//                             }


//                             {isHovered === singleMediaData.id && (
//                                 <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
//                                     <button
//                                         onClick={() => navigate(`/movie/${singleMediaData.id}`)}
//                                         className="px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
//                                     >
//                                         <IoPlayCircle />
//                                         <span>Play</span>
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="px-1">
//                             <div className="flex gap-1 items-center">
//                                 <span> {singleMediaData.releaseDate.split('-')[0] || 'Unknown'} </span>
//                                 <LuDot />
//                                 <MdLocalMovies />
//                                 <span>{singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1)}</span>
//                                 <LuDot />
//                                 <span>{singleMediaData.isAdult ? "18+" : "PG"}</span>
//                             </div>
//                             <span> {singleMediaData.title} </span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Movie;
