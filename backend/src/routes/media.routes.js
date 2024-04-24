const express = require('express');
const { trendingMediaController, movieMediaController, tvMediaController } = require('../controllers/media.controllers.js');
const { movieDetailController, tvDetailController } = require('../controllers/mediaDetail.controllers.js')
const { movieImageController, tvImageController } = require('../controllers/mediaImage.controllers.js')
const { searchMovieController, searchTvController, searchAllController } = require('../controllers/mediaSearch.controllers.js')

// router instances 
const mediaRouter = express.Router();

// media routes 
mediaRouter.get("/media/trending/:page", trendingMediaController);
mediaRouter.get("/media/movie/:page", movieMediaController);
mediaRouter.get("/media/tv/:page", tvMediaController);

// thumbnail image
mediaRouter.get('/media/movie/image/:movieId', movieImageController);
mediaRouter.get('/media/tv/image/:seriesId', tvImageController);

// details of movies and TvShows routes
mediaRouter.get("/media/movie/detail/:movieId", movieDetailController);
mediaRouter.get("/media/tv/detail/:seriesId", tvDetailController);

//searching movies, Tvshows, and all media routes
mediaRouter.get("/media/movie/search/:searchQuery", searchMovieController);
mediaRouter.get("/media/tv/search/:searchQuery", searchTvController);
mediaRouter.get("/media/all/search:searchQuery", searchAllController);

// exporting router 
module.exports = { mediaRouter }