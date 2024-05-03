// import React, { useState } from "react";
// import { useQuery } from 'react-query';

// // importing custom files 
// import Loading from "../components/CssComponents/Loading";
// import Media from "../components/MediaComponents/Media";
// import fetchMultiMedia from "../utils/fetchMultiMedia";

// // movie page
// const Movie = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [allMediaData, setAllMediaData] = useState([]);

//     // Function to fetch media data for the current page
//     const fetchMediaData = async () => {
//         const newData = await fetchMultiMedia(currentPage, "movie");
//         return newData;
//     };

//     // Fetching media 
//     const {
//         data: mediaData,
//         isLoading,
//         isError,
//         refetch
//     } = useQuery(['movie', currentPage], fetchMediaData);

//     // Function to fetch next page data
//     const fetchNextPage = async () => {
//         setCurrentPage(prevPage => prevPage + 1);
//         const newData = await fetchMediaData();
//         setAllMediaData(prevData => prevData.concat(newData));
//     };

//     // render loading or error 
//     if (isLoading) return <Loading />;
//     if (isError) return <div>Error fetching data</div>;

//     // css style 
//     const containerStyle = "p-4 mt-2 flex flex-col gap-6";
//     const headingStyle = "text-2xl md:text-4xl font-bold";
//     const wrapperStyle = "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"

//     // Render Movie media 
//     return (
//         <div className={containerStyle}>
//             <h1 className={headingStyle}>Explore Movie</h1>
//             <div className={wrapperStyle}>
//                 <Media mediaData={allMediaData} />
//             </div>
//             <button onClick={fetchNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//                 Load More
//             </button>
//         </div>
//     );
// };

// export default Movie;







import React, { useState } from "react";
import { useQuery } from 'react-query';

// importing custom files 
import Loading from "../components/CssComponents/Loading";
import Media from "../components/MediaComponents/Media";
import fetchMultiMedia from "../utils/fetchMultiMedia";

// movie page
const Movie = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Function to fetch media data for the current page
    const fetchMediaData = async () => {
        const newData = await fetchMultiMedia(currentPage, "movie");
        return newData;
    };

    // Fetching media 
    const {
        data: mediaData,
        isLoading,
        isError,
        refetch
    } = useQuery(['movie', currentPage], fetchMediaData);

    // Function to fetch next page data
    const fetchNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
        refetch();
    };

    // render loading or error 
    if (isLoading) return <Loading />;
    if (isError) return <div>Error fetching data</div>;

    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";
    const wrapperStyle = "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"

    // Render Movie media 
    return (
        <div className={containerStyle}>
            <h1 className={headingStyle}>Explore Movie</h1>
            <div className={wrapperStyle}>
                <Media mediaData={mediaData} />
            </div>
            <button onClick={fetchNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Load More
            </button>
        </div>
    );
};

export default Movie;

