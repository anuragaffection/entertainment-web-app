// import { useEffect, useState } from "react";
// import { DNA } from "react-loader-spinner";
// import { useNavigate } from "react-router-dom";
// import { MdLocalMovies } from "react-icons/md";
// import { LuDot } from "react-icons/lu";
// import { IoPlayCircle } from "react-icons/io5";
// import { CiBookmark } from "react-icons/ci";
// import { IoMdBookmark } from "react-icons/io";
// import axios from 'axios'
// import MediaCard from '../components/MediaComponents/MediaCard'

// // backned must be running 
// const tmdbActionUrl = 'http://localhost:8000/api'

// // Fetch multiple media based on type (e.g., movie, TV show)
// const useFetchMultiMedia = async (page, setMediaData, mediaType) => {
//     try {
//         const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/${page}`);
//         setMediaData(data.data);
//     } catch (error) {
//         // Log error if fetching fails
//         // console.error("Error fetching multi-media:", error);
//     }
// };

// const Movie = () => {
//     const navigate = useNavigate();

//     // Fetch movie data using custom hook
//     const fetchMovie = useFetchMultiMedia;

//     // State to store fetched media data
//     const [mediaData, setMediaData] = useState(null);
//     const [isHovered, setIsHovered] = useState(null)

//     // Fetch movie data when component mounts
//     // we can change the page 
//     useEffect(() => {
//         setTimeout(() => {
//             fetchMovie(1, setMediaData, "movie");
//         }, 2000);
//     }, [fetchMovie]);

//     console.log(mediaData)

//     // Render Movie component
//     return (
//         <div className="p-4 mt-2 flex flex-col gap-6">
//             <h1 className="text-4xl font-bold">Explore Movie</h1>
//             {
//                 mediaData ? (
//                     // If mediaData is available, render movie cards
//                     <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
//                         {
//                             mediaData.map((singleMediaData) => (
//                                 <div
//                                     key={singleMediaData.id}
//                                     className="flex flex-col gap-2"
//                                 >
//                                     <div
//                                         className="relative"
//                                         onMouseEnter={() => setIsHovered(singleMediaData.id)}
//                                         onMouseLeave={() => setIsHovered(null)}
//                                     >
//                                         <MediaCard
//                                             singleMediaData={singleMediaData}
//                                             fieldType={"movie"}
//                                             mediaType={"Movie"}
//                                         />

//                                         <div className="absolute p-3 top-1 right-1 bg-black hover:bg-darkRed duration-100 cursor-pointer rounded-full z-10">
//                                             < CiBookmark />
//                                         </div>

//                                         {
//                                             // only when hovered , overlay 
//                                             isHovered === singleMediaData.id && (
//                                                 <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
//                                                     <button
//                                                         onClick={ () => navigate(`/movie/${singleMediaData.id}`)}
//                                                         className="px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
//                                                     >
//                                                         <IoPlayCircle />
//                                                         <span>Play</span>
//                                                     </button>
//                                                 </div>
//                                             )
//                                         }
//                                     </div>
//                                     <div className="px-1">
//                                         <div className="flex gap-1 items-center">
//                                             <span> {singleMediaData.releaseDate.split('-')[0] || 'Unknown'} </span>
//                                             <LuDot />
//                                             <MdLocalMovies />
//                                             <span>{singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1)}</span>
//                                             <LuDot />
//                                             <span>{mediaData.isAdult ? "18+" : "PG"}</span>
//                                         </div>
//                                         <span> {singleMediaData.title} </span>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 ) : (
//                     // If mediaData is not available, render loading spinner
//                     <div className="w-full h-4/5 flex items-center justify-center">
//                         <DNA height={100} width={100} />
//                     </div>
//                 )
//             }
//         </div>
//     );
// };

// export default Movie;