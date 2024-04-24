
import axios from "axios";
import { tmdbActionUrl } from "../utils/constant.utils";


// we are fetching the poster or thumbnails for meida 
// Function to fetch TMDB image based on media ID and type
export const useFetchTMDBImage = async (mediaId, setPosterImage, mediaType) => {
    // Check if mediaId and mediaType are provided
    if (mediaId && mediaType) {
        try {
            // Make a GET request to TMDB API to fetch images
            const { data } = await axios.get(
                // Construct the API endpoint URL with mediaType and mediaId
                `https://api.themoviedb.org/3/${mediaType}/${mediaId}/images?api_key=${
                // Retrieve the API key from environment variables
                import.meta.env.VITE_APP_TMDB_API_KEY
                }&language=en-US&include_image_language=en,null`
            );

            // Check if data is available
            if (data) {
                // Set the poster image using the backdrop at index 1 (you might want to adjust this logic)
                setPosterImage(data?.backdrops[1]?.file_path);
            }
        } catch (error) {
            // Handle any errors occurred during the API call
            console.error("Error fetching TMDB image:", error);
        }
    }
};

// Fetch trending media
export const useFetchTrendingMedia = async (page, setMediaData) => {
    try {
        // Fetch trending media data from TMDB API
        const { data } = await axios.get(`${tmdbActionUrl}/trending/${page}`);
        // Set fetched media data to state
        setMediaData(data.data);
    } catch (error) {
        // Log error if fetching fails
        // console.error("Error fetching trending media:", error);
    }
};

// Fetch multiple media based on type (e.g., movie, TV show)
export const useFetchMultiMedia = async (page, setMediaData, mediaType) => {
    try {
        // Fetch media data based on type and page from TMDB API
        const { data } = await axios.get(`${tmdbActionUrl}/discover/${mediaType}/${page}`);
        // Set fetched media data to state
        setMediaData(data.data);
    } catch (error) {
        // Log error if fetching fails
        // console.error("Error fetching multi-media:", error);
    }
};


// Search for media based on query and type
// we are  going to this in SearchResult.jsx
export const useSearchMultiMedia = async (
    searchQuery,
    setMediaData,
    mediaType
) => {
    try {
        // If both search query and media type are provided
        if (searchQuery && mediaType) {
            // Fetch media data based on query and type from TMDB API
            const { data } = await axios.get(
                `${tmdbActionUrl}/search/${mediaType}/${searchQuery}`
            );
            // Set fetched media data to state
            setMediaData(data.data);
        }
    } catch (error) {
        // Log error if fetching fails
        // console.error("Error searching multi-media:", error);
    }
};


// Fetch detailed information of a specific media
// we are going to use this in MediaDetails.jsx 
export const useFetchMediaDetail = async (
    mediaId,
    setMediaDetail,
    mediaType
) => {
    try {
        // If both media ID and media type are provided
        if (mediaId && mediaType) {
            // Fetch detailed media information based on ID and type from TMDB API
            const { data } = await axios.get(
                `${tmdbActionUrl}/detail/${mediaType}/${mediaId}`
            );
            // Set fetched media detail to state
            setMediaDetail(data.data);
        }
    } catch (error) {
        // Log error if fetching fails
        // console.error("Error fetching media detail:", error);
    }
};