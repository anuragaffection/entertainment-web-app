import React from 'react';
import { useQuery } from 'react-query';
import { DNA } from "react-loader-spinner";
import Media from '../MediaComponents/Media';
import fetchMultiMedia from '../../utils/fetchMultiMedia'


function MediaRecommend() {

    // fetch media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([2, 'trending'], () => fetchMultiMedia(2, "trending"));


    // render loading or error 
    if (isLoading) return  <DNA height={50} width={50} />;
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <div className='p-4 mt-2 flex flex-col gap-6'>
                <h1 className="text-4xl font-bold"> Recommended for You </h1>
                <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
                    <Media mediaData={mediaData} />
                </div>
            </div>
        </>
    )
}

export default MediaRecommend;
