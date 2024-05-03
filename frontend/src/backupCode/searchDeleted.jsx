// {mediaData.map((singleMediaData) => (
//     <div key={singleMediaData.id} className="flex flex-col gap-2">
//         <div
//             className="relative"
//             onMouseEnter={() => setIsHovered(singleMediaData.id)}
//             onMouseLeave={() => setIsHovered(null)}
//         >
//             <MediaImage
//                 singleMediaData={singleMediaData}
//                 fieldType={"movie"}
//                 mediaType={"Movie"}
//             />

//             <MediaBookmark />

//             {isHovered === singleMediaData.id && (
//                 <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
//                     <button
//                         onClick={() => navigate(`/movie/${singleMediaData.id}`)}
//                         className="px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
//                     >
//                         <IoPlayCircle />
//                         <span>Play</span>
//                     </button>
//                 </div>
//             )}
//         </div>
//         <div className="px-1">
//             <div className="flex gap-1 items-center">
//                 <span> {singleMediaData.releaseDate ? singleMediaData.releaseDate.split('-')[0] : 'Unknown'} </span>

//                 <LuDot />
//                 {singleMediaData.mediaType === 'movie' ? <MdLocalMovies /> : <TbDeviceTvOld />}

//                 <span>{singleMediaData.mediaType ? singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1) : `${mediaType}`}</span>

//                 <LuDot />
//                 <span>{singleMediaData.isAdult ? "18+" : "PG"}</span>
//             </div>
//             <span> {singleMediaData.title ? singleMediaData.title : `${searchQuery}`} </span>
//         </div>
//     </div>
// ))}