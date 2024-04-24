
// media url 
// we will need dynamic page = some number
const trendingMediaUrl = "https://api.themoviedb.org/3/trending/all/day?language=en-US&page=";
const movieMediaUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&sort_by=popularity.desc&certification_country=US&certification=R&page=";
const tvMediaUrl = "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&page=";

// detail url 
// we have to replace, movie_id, series_id
const movieDetailUrl = "https://api.themoviedb.org/3/movie/movie_id?append_to_response=20&language=en-US";
const tvDetailUrl = "https://api.themoviedb.org/3/tv/series_id?append_to_response=20&language=en-US";

// thumbnail image 
// replace movie_id & series_id 
const movieImageUrl = "https://api.themoviedb.org/3/movie/movie_id/images?api_key="
const tvImageUrl = "https://api.themoviedb.org/3/movie/series_id/images?api_key="

// search url 
const searchMovieUrl = "https://api.themoviedb.org/3/search/movie?query=query_Text&include_adult=true&language=en-US";
const searchTvUrl = "https://api.themoviedb.org/3/search/tv?query=query_Text&include_adult=true&language=en-US";
const searchAllUrl = "https://api.themoviedb.org/3/search/multi?query=query_Text&include_adult=true&language=en-US";

// cast url 
const castMovieUrl = "https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US";
const castTvUrl = "https://api.themoviedb.org/3/tv/series_id/credits?language=en-US";


// exporting 
module.exports = {
    trendingMediaUrl,
    movieMediaUrl, tvMediaUrl,
    movieDetailUrl, tvDetailUrl,
    movieImageUrl, tvImageUrl,
    searchMovieUrl, searchTvUrl, searchAllUrl,
    castMovieUrl, castTvUrl,
}