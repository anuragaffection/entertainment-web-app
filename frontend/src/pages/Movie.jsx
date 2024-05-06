// importing from installed packages 
import React, { useState, Suspense, lazy } from "react";
const MoreMedia = lazy(() => import('../components/MoreMedia'));
// import MoreMedia from "../components/MoreMedia";

// i am doing lazy important to improve peformance
// suspense is a part of lazy laodings

// movie page
const Movie = () => {

    // initial page numbers 
    const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

    // Function to fetch next page data
    const fetchNextPage = () => {
        setPageNumbers(prevPageNumbers => [...prevPageNumbers, pageNumbers[pageNumbers.length - 1] + 1]);
    };

    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";


    // Render Movie media 
    return (
        <div className={containerStyle}>
            <h1 className={headingStyle}>Explore Movie</h1>

            <Suspense fallback={<div>Loading...</div>}>
                {
                    pageNumbers.map((currentPage, index) => (
                        <MoreMedia
                            key={index}
                            currentPage={currentPage}
                            mediaType={"movie"}
                        />
                    ))
                }
            </Suspense>
            <button
                onClick={fetchNextPage}
                className="px-6 py-3 mb-10 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
                Load More
            </button>
        </div>
    );
};

export default Movie;
