const axios = require('axios');

// Function to fetch media data from a given URL
// taking two parameter 
const fetchData = async (url, params) => {
	try {
		// Make a GET request to the provided URL
		const { data } = await axios.get(url, {
			params,
			headers: {
				"Content-Type": "application/json",
				Authorization: process.env.TMDB_KEY,
				// Include TMDB token in headers
				// is this the best way to do 
			},
		});
		return data;
	} catch (error) {
		// Handle errors if any occur
		// console.error("Error fetching data:", error);
		throw error;
	}
};


// Function to customize media data
// taking two parameters 
const customizeMediaData = (mediaData, mediaType = undefined) => {
	return mediaData.map((media) => ({
		id: media.id,
		title: media.name || media.title,
		image: media.poster_path,
		isAdult: media.adult,
		mediaType: mediaType === undefined ? media.media_type : mediaType,
		releaseDate: media.release_date || media.first_air_date,
	}));
};


// Function to customize detail data for a single media item
// taking  three paramters 
const customizeMediaDetailData = (mediaData, cast = [], mediaType) => {
	return {
		mediaData: {
			id: mediaData.id,
			title: mediaData.title || mediaData.name,
			overview: mediaData.overview,
			image: mediaData.poster_path,
			isAdult: mediaData.adult,
			rating: mediaData.vote_average / 2,
			status: mediaData.status,
			runtime: mediaData.runtime,
			genres: mediaData.genres.map((genre) => genre.name),
			tagline: mediaData.tagline,
			imdb_id: mediaData.imdb_id,
			homepage: mediaData.homepage,
			language: mediaData.spoken_languages.map(
				(language) => language.english_name
			),
			...(mediaType === "tv" && {
				// first & last date  of the series
				first_air_date: mediaData.first_air_date,
				last_air_date: mediaData.last_air_date,
			}),
			...(mediaType === "movie" && {
				release_date: mediaData.release_date
			}),
		},
		// List of cast members names
		cast: cast.map(castData => castData.name),

	};
};


module.exports = {
	fetchData, customizeMediaData, customizeMediaDetailData
}
