import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import Loading from '../CssComponents/Loading'
import MediaRatings from "./MediaRatings";
import MediaCast from "./MediaCast";
import MediaSynopsis from "./MediaSynopsis";
import MediaLink from "./MediaLink";
import MediaGenre from "./MediaGenre";
import MediaInfo from "./MediaInfo";
import MediaHeading from "./MediaHeading";
import MediaImage from "./MediaImage";

// Base url 
const tmdbActionUrl = 'http://localhost:8000/api';


// used for fetching movie & tv details 
function Details() {
    const navigate = useNavigate();
    const location = useLocation();
    const { mediaId } = useParams();

    const mediaType = location.pathname.split('/')[1];
    const [mediaDetail, setMediaDetail] = useState(null);

    useEffect(() => {
        const fetchMediaDetail = async () => {
            try {
                if (mediaId && mediaType) {
                    const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/detail/${mediaId}`);
                    setMediaDetail(data.data);
                }
            } catch (error) {
                console.error("Error fetching media detail:", error);
            }
        };
        fetchMediaDetail();
    }, [mediaId, mediaType]);


    return (
        <div className="mr-2 py-6 px-2 bg-leanblue">

            {/* button to back */}
            <button
                onClick={() => navigate(`/${mediaType}`)}
                className="mb-4 px-6 py-2 flex gap-3 items-center bg-darkRed text-lg font-semibold rounded-full duration-100"
            >
                <span>Go Back</span>
            </button>
            {
                mediaDetail ? (
                    <div className=" flex flex-col sm:flex-row gap-8 justify-evenly">
                        
                        {/* Render media image */}
                        <MediaImage mediaDetail={mediaDetail} />

                        {/* loading media details */}
                        <div className="text-white flex flex-col gap-6 md:gap-8 lg:gap-10">
                            <MediaHeading mediaDetail={mediaDetail} />
                            <MediaRatings mediaDetail={mediaDetail} />
                            <MediaInfo mediaDetail={mediaDetail} />
                            <MediaGenre mediaDetail={mediaDetail} />
                            <MediaSynopsis mediaDetail={mediaDetail} />
                            <MediaCast mediaDetail={mediaDetail} />
                            <MediaLink mediaDetail={mediaDetail} />
                        </div>
                    </div>
                ) : (
                    // loading spinner
                    <Loading />
                )
            }
        </div>
    );
}

export default Details;
