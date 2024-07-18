import React from 'react'
import { fallbackData } from './fallbackData';
import Media from '../MediaComponents/Media'

function FallbackMedia() {

    const mediaData = fallbackData.data;
    const wrapperStyle = "mt-10 grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"

    return (
        <>
            <div
                className={wrapperStyle}
                style={{ gridAutoColumns: "minmax(230px, auto)" }}
            >
                <Media mediaData={mediaData} />
            </div>
        </>
    )
}

export default FallbackMedia