 import axios from 'axios'

// base url 
const tmdbActionUrl = 'http://localhost:8000/api'

// Fetch multiple media based on type, trending, movie, tv 
const fetchMultiMedia = async (page, mediaType) => {
    const { data } = await axios.get(`${tmdbActionUrl}/media/${mediaType}/${page}`);
    return data.data;
};

// export 
export default fetchMultiMedia;
