// importing installed packages 
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// importing custom packages  
import Loading from '../components/CssComponents/Loading'
import Media from '../components/MediaComponents/Media'
import baseUrl from '../utils/baseUrl'
import MyContext from '../context/MyContext';


// bookmark media 
function Bookmarks() {
    const { isAuthenticated } = useContext(MyContext)
    const [mediaData, setMediaData] = useState([]);

    // bookmark media data fetching 
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
                    setMediaData(data.data);
                } catch (error) {
                    // console.error("Error fetching media data:", error);
                }
            }
            fetchData();
        }
    }, [isAuthenticated]);


    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";
    const wrapperStyle = "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"


    return (
        <div className={containerStyle}>
            <h1 className={headingStyle}> Bookmarks </h1>

            {
                isAuthenticated ? <>
                    {
                        // render bookmark media 
                        mediaData && mediaData.length > 0 ? (
                            <div className={wrapperStyle}>
                                <Media mediaData={mediaData} />
                            </div>

                        ) : (
                            // render loading
                            <Loading />
                        )
                    }
                </> : <>
                    <div className='flex flex-col gap-4'>
                        <div>No Account Found </div>
                        <Link
                            to="/profile"
                            className="px-6 py-3 w-32 text-center bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
                        >
                            Visit Here
                        </Link>
                    </div>
                </>
            }

        </div>
    )
}

export default Bookmarks