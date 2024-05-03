{/* {mediaData.map((singleMediaData) => (
                    <div key={singleMediaData.id} className="flex flex-col gap-2">
                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovered(singleMediaData.id)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            <MediaCard
                                singleMediaData={singleMediaData}
                                mediaType={"Movie"}
                            />

                            {
                                bookmarkedIds.includes(singleMediaData.id) ? (
                                    <MediaBookmarked
                                        singleMediaData={singleMediaData}
                                    />
                                ) : (
                                    <MediaBookmark
                                        onClick={() => {
                                            setBookmarkData(singleMediaData);
                                            postData();
                                        }}
                                    />
                                )
                            }


                            {isHovered === singleMediaData.id && (
                                <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg'>
                                    <button
                                        onClick={() => navigate(`/movie/${singleMediaData.id}`)}
                                        className="px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
                                    >
                                        <IoPlayCircle />
                                        <span>Play</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="px-1">
                            <div className="flex gap-1 items-center">
                                <span> {singleMediaData.releaseDate.split('-')[0] || 'Unknown'} </span>
                                <LuDot />
                                <MdLocalMovies />
                                <span>{singleMediaData.mediaType.charAt(0).toUpperCase() + singleMediaData.mediaType.slice(1)}</span>
                                <LuDot />
                                <span>{singleMediaData.isAdult ? "18+" : "PG"}</span>
                            </div>
                            <span> {singleMediaData.title} </span>
                        </div>
                    </div>
                ))} */}




                // // base url 
// const tmdbActionUrl = 'http://localhost:8000/api'

// // Fetch multiple media based on type (e.g., movie, TV show)
// const fetchMultiMedia = async (page, mediaType) => {
//     const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/${page}`);
//     return data.data;
// };