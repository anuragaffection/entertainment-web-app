const { trendingMediaUrl, movieMediaUrl, tvMediaUrl } = require("../constants/media.constants.js")
const { fetchData, customizeMediaData } = require('../utils/media.utils.js');


// 01. trending media 
// each page have different trendig media 
const trendingMediaController = async (req, res) => {
    try {
        // from req parameters 
        // page , variable name same as in backend routing 
        const { page } = req.params || 1;

        // fetching data  
        const data = await fetchData(trendingMediaUrl + page + `&api_key=${process.env.TMDB_KEY}`);

        // customize response 
        res.status(200).json({
            success: true,
            data: customizeMediaData(data.results),
            totalPages: data.total_pages,
        });
    } catch (error) {
        // handle error in console 
        // console.error("Error in trendingMediaController:", error);

        // response with error 
        res.status(500).json({
            success: false,
            error: "Internal server error in trendingMediaController",
        });
    }
}


// 02. movies media 
const movieMediaController = async (req, res) => {
    try {
        // page  from request parameters
        // page, variable Name same as in backend routing 
        const page = req.params.page || 1;

        // fectching data from movieMediaUrl
        const data = await fetchData(movieMediaUrl + page + `&api_key=${process.env.TMDB_KEY}`);

        // Responding with customize data
        res.status(200).json({
            success: true,
            message: "Collection of Movies",
            data: customizeMediaData(data.results, "movie"),
            totalPages: data.total_pages,
        });
        
    } catch (error) {
        // Handle errors in console 
        // console.error("Error in movieMedia controllers:", error);

        // response with error
        res.status(500).json({
            success: false,
            error: "Internal server error in movie Media",
        });
    }
}


// 03. tv shows media 
const tvMediaController = async (req, res) => {
    try {
        // page from request 
        // page, variable name as in backend routing 
        const page = req.params.page || 1;

        // fetching data from tvMediaUrl
        // check the url as the url already contain page=1
        const data = await fetchData(tvMediaUrl + page + `&api_key=${process.env.TMDB_KEY}`);

        // responding with customize data 
        res.status(200).json({
            success: true,
            message: "Collection of TvShows",
            data: customizeMediaData(data.results, "tv"),
            totalPages: data.total_pages,
        })

    } catch (error) {
        // handle the error in console 
        // console.log("error in tvMediaController = ", error);

        // response with error 
        res.status(500).json({
            success: false,
            message: "Error in data fetching",
            error: "Internal Server error in Tv Shows"
        })
    }
}


// exporting 
module.exports = {
    trendingMediaController, movieMediaController, tvMediaController,
}