import React from 'react'
import { fallbackData } from './fallbackData';
import Media from '../MediaComponents/Media'
function FallbackMedia() {
    const mediaData = fallbackData.data;

    return (
        <>
            <Media mediaData={mediaData} />
        </>
    )
}

export default FallbackMedia