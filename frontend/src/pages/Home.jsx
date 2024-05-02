import React from 'react';
import MediaRecommend from '../components/HomeComponents/MediaRecommend';
import MediaTrending from '../components/HomeComponents/MediaTrending';


function Home() {
    return (
        <>
            <MediaTrending />
            <MediaRecommend />
        </>
    )
}

export default Home;
