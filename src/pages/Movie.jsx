import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Movie = () => {
  //   const movieId = "496243";
  //   const key = "1184cf59b751ed79cd2eace68f22426c";
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();

  useEffect(() => {
    axios.get(requests.findMovieData).then((response) => {
      setMovie(response.data);
    });
    axios.get(requests.findMovieVideos).then((response) => {
      setMovieVideos(response.data.results);
    });
  }, []);

  // axios
  //   .get(
  //     `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
  //   )
  //   .then((response) => {
  //     console.log(response.data);
  //   });
  console.log(movie);
  console.log(movieVideos);
  return (
    <>
      <div className="w-full h-[650px] text-white">
        <div className="w-full h-full ">
          <div className="absolute w-full h-[650px] bg-gradient-to-r from-black" />
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        <div className="absolute w-full top-[20%] ml-[150px]">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <p className="text-gray-400 py-4 text-base">
            Released: {movie?.release_date}
          </p>
          <div className="flex gap-3">
            {movie?.production_companies.map((company) => {
              return (
                <p key={company.id} className="text-gray-400 pb-4 text-base">
                  {company.name}
                </p>
              );
            })}
          </div>
          <div className="flex gap-3">
            {movie?.genres.map((genr) => {
              return (
                <p key={genr.id} className="text-gray-400 pb-4 text-base">
                  {genr.name}
                </p>
              );
            })}
          </div>
          <p className="text-lg font-medium w-[40%]"> {movie?.overview}</p>
        </div>
      </div>
      <div className="ml-[150px] mt-8">
        <h1 className="text-4xl  font-semibold text-white">Trailers</h1>
        <div>
          {movieVideos?.map((video) => {
            return (
              <video
                key={video.key}
                src={`https://www.youtube.com/watch?v=${video.key}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;
