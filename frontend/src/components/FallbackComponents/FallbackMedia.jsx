import React from 'react'
import { fallbackData } from './fallbackData';

function FallbackMedia() {
    const mediaData = fallbackData.data;

    return (
        <>
            <Media mediaData={mediaData} />
        </>
    )
}

export default FallbackMedia