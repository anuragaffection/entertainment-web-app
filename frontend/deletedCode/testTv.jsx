// import { useEffect, useState } from "react";
// import { DNA } from "react-loader-spinner";
// import { useNavigate } from "react-router-dom";
// import { TbDeviceTvOld } from "react-icons/tb";
// import { LuDot } from "react-icons/lu";
// import { IoPlayCircle } from "react-icons/io5";
// import { CiBookmark } from "react-icons/ci";
// import { IoMdBookmark } from "react-icons/io";
// import axios from 'axios'
// import MediaCard from '../components/MediaComponents/MediaCard'

// // backned must be running 
// const tmdbActionUrl = 'http://localhost:8000/api'


// // Fetch multiple media based on type (e.g., Tv, TV show)
// const useFetchMultiMedia = async (page, setMediaData, mediaType) => {
//     try {
//         const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/${page}`);
//         setMediaData(data.data);
//     } catch (error) {
//         // Log error if fetching fails
//         // console.error("Error fetching multi-media:", error);
//     }
// };

// const Tv = () => {
//     const navigate = useNavigate();
//     // Fetch Tv data using custom hook
//     const fetchTv = useFetchMultiMedia;

//     // State to store fetched media data
//     const [mediaData, setMediaData] = useState(null);
//     const [isHovered, setIsHovered] = useState(null)

//     // Fetch Tv data when component mounts
//     // we can change the page 
//     useEffect(() => {
//         setTimeout(() => {
//             fetchTv(1, setMediaData, "Tv");
//         }, 2000);
//     }, [fetchTv]);

//     console.log(mediaData)

//     // Render Tv component
//     return (
//         <div className="p-4 mt-2 flex flex-col gap-6">
//             <h1 className="text-4xl font-bold">Explore Tv</h1>
//             {
//                 mediaData ? (
//                     // If mediaData is available, render Tv cards
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
//                                             fieldType={"Tv"}
//                                             mediaType={"Tv"}
//                                         />

//                                         <div className="absolute p-3 top-1 right-1 bg-black hover:bg-darkRed duration-100 cursor-pointer rounded-full z-10">
//                                             < CiBookmark />
//                                         </div>

//                                         {
//                                             // only when hovered 
//                                             isHovered === singleMediaData.id && (
//                                                 <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
//                                                     <button
//                                                     onClick={() => navigate(`/tv/${singleMediaData.id}`)}
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
//                                             <TbDeviceTvOld />
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

// export default Tv;