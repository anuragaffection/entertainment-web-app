
const { movieImageUrl, tvImageUrl } = require('../constants/media.constants.js')
const { fetchData } = require('../utils/media.utils.js')


// movie image or thumbnail or backdrops 
const movieImageController = async (req, res) => {
    try {
        const { movieId } = req.params;

        // replacing id & fetching data 
        const updatedMovieImageUrl = movieImageUrl.replace("movie_id", movieId.toString());
        const data = await fetchData(updatedMovieImageUrl + process.env.TMDB_KEY);

        // Check if data contains backdrops
        if (data.backdrops && data.backdrops.length > 0) {
            res.json({
                success: true,
                imagePath: data.backdrops[0].file_path,
            });
        } else {
            res.json({
                success: false,
                message: "No backdrops found for this movie.",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// tv image , thumbnail or backdrops 
const tvImageController = async (req, res) => {
    try {
        const { seriesId } = req.params;

        // replacing id & fetching data 
        const updatedTvImageUrl = tvImageUrl.replace("series_id", seriesId.toString());
        const data = await fetchData(updatedTvImageUrl + process.env.TMDB_KEY);

        // Check if data contains posters
        if (data.backdrops && data.backdrops.length > 0) {
            res.json({
                success: true,
                imagePath: data.backdrops[0].file_path,
            });
        } else {
            res.json({
                success: false,
                message: "No posters found for this shows.",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

module.exports = {
    movieImageController, tvImageController
}