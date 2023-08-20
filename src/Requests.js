const key = "1184cf59b751ed79cd2eace68f22426c";
const movieId = "565770";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  findMovieData: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
  findMovieVideos: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
};

export default requests;
