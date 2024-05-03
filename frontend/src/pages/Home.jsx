// importing installed packages
import React from 'react';

// importing custom files 
import MediaRecommend from '../components/HomeMedia/MediaRecommend';
import MediaTrending from '../components/HomeMedia/MediaTrending';

// home page 
function Home() {
    return (
        <>
            <MediaTrending />
            <MediaRecommend />
        </>
    )
}

export default Home;
