const { movieDetailUrl, tvDetailUrl, castMovieUrl, castTvUrl } = require('../constants/media.constants.js')
const { fetchData, customizeMediaDetailData } = require('../utils/media.utils.js')

// 01. movie detail 
const movieDetailController = async (req, res) => {
    try {
        // movieId from request parameter
        // movieId, variable name same as backend routing 
        const movieId = req.params.movieId;

        // url editing 
        const updatedMovieDetailUrl = movieDetailUrl.replace("movie_id", movieId.toString());
        const updatedCastMovieUrl = castMovieUrl.replace("movie_id", movieId.toString());

        // data fetching with updated url
        const movieData = await fetchData(updatedMovieDetailUrl + `&api_key=${process.env.TMDB_KEY}`);
        const { cast } = await fetchData(updatedCastMovieUrl + `&api_key=${process.env.TMDB_KEY}`);

        // response with customize media detail
        res.json({
            success: true,
            data: customizeMediaDetailData(movieData, cast, "movie"),
        });

    } catch (error) {
        // response with error 
        res.status(500).json({
            success: false,
            error: "Internal server error in movieDetailController",
        });
    }
}


// 02. tv detail 
const tvDetailController = async (req, res) => {
    try {
        // seriesId from request parameter
        // seriesId, variable name same as backend routing 
        const { seriesId } = req.params;

        // url editing 
        const updatedTvDetailUrl = tvDetailUrl.replace("series_id", seriesId.toString());
        const updatedCastTvUrl = castTvUrl.replace("series_id", seriesId.toString());

        // data fetching with updated url
        const tvData = await fetchData(updatedTvDetailUrl + `&api_key=${process.env.TMDB_KEY}`);
        const { cast } = await fetchData(updatedCastTvUrl + `&api_key=${process.env.TMDB_KEY}`);

        // response with customize tv details
        res.json({
            success: true,
            data: customizeMediaDetailData(tvData, cast, "tv"),
        });

    } catch (error) {
        // If TV shows is not found, respond with 404 error.
        // if (error.response.status === 404) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Page Not Found",
        //     });
        // }
        // responsw with error 
        res.status(500).json({
            success: false,
            error: "Internal server error in tvDetailController",
        });
    }
}


module.exports = {
    movieDetailController, tvDetailController
}
