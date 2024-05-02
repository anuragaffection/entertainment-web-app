
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/CssComponents/Loading'
import Media from '../components/MediaComponents/Media'

const tmdbActionUrl = 'http://localhost:8000/api';

function Bookmarks() {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/api/media/bookmark/get`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                });
                setMediaData(data.data);
            } catch (error) {
                console.error("Error fetching media data:", error);
            }
        }
        fetchData();
    }, []);


    return (
        <div className='p-4 mt-2 flex flex-col gap-6'>
            <h1 className="text-2xl md:text-4xl font-bold"> Bookmarks </h1>
            {
                mediaData && mediaData.length > 0 ? (
                    <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <Media mediaData={mediaData} />
                    </div>

                ) : (
                    // render loading
                    <Loading />
                )}
        </div>
    )
}

export default Bookmarks