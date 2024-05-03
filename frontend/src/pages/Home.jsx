import React from 'react';
import MediaRecommend from '../components/HomeMedia/MediaRecommend';
import MediaTrending from '../components/HomeMedia/MediaTrending';
import Movie from './Movie';
import Tv from './Tv';

function Home() {
    return (
        <>
            <MediaTrending />
            <MediaRecommend />
            <Movie />
            <Tv />
        </>
    )
}

export default Home;
