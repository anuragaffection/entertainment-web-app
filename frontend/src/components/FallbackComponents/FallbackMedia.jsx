import React from 'react'
import { fallbackData } from './fallbackData';
import Media from '../MediaComponents/Media'

function FallbackMedia() {

    const mediaData = fallbackData.data;

    const wrapperStyle = "flex sm:grid grid-rows-1 grid-flow-col overflow-x-scroll gap-5 lg:gap-7 scrollbar-corner-transparent scrollbar scrollbar-thumb-darkRed scrollbar-track-transparent"

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