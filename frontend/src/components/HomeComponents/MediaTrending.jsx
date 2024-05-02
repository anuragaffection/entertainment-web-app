import React from 'react';
import { useQuery } from 'react-query';

import Loading from '../CssComponents/Loading';
import Media from '../MediaComponents/Media';
import fetchMultiMedia from '../../utils/fetchMultiMedia';


function MediaTrending() {

    // fetch media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([1, 'trending'], () => fetchMultiMedia(1, "trending"));


    // render loading or error 
    if (isLoading) return <Loading />;
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <div className='p-4 mt-2 flex flex-col gap-6'>
                <h1 className="text-4xl font-bold"> Trending </h1>
                <div
                    className="flex sm:grid grid-rows-1 grid-flow-col overflow-x-scroll gap-5 lg:gap-7 scrollbar-corner-transparent scrollbar scrollbar-thumb-darkRed scrollbar-track-transparent"
                    style={{ gridAutoColumns: "minmax(230px, auto)" }}
                >
                    <Media mediaData={mediaData} />
                </div>
            </div>
        </>
    )
}

export default MediaTrending;
