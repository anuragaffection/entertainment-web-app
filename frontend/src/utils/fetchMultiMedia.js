import axios from 'axios'
import baseUrl from './baseUrl'

// Fetch multiple media based on type, trending, movie, tv 
const fetchMultiMedia = async (page, mediaType) => {
    const { data } = await axios.get(`${baseUrl}/media/${mediaType}/${page}`);
    return data.data;
};


export default fetchMultiMedia;

