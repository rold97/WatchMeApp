import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import YouTube from "react-youtube";

const MovieDetails = ({}) => {
  const { id } = useParams();
  const key = "1184cf59b751ed79cd2eace68f22426c";

  const [movieDetails, setMovieDetails] = useState();
  // const [movieVideos, setMovieVideos] = useState();

  const findMovieByID = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((err) => console.error(err));
  };
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg0Y2Y1OWI3NTFlZDc5Y2QyZWFjZTY4ZjIyNDI2YyIsInN1YiI6IjY0Y2QyYjg4MmYyNjZiMDllZTNjNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fAoOuQ3hWkSwO2UpbB5iaBrL4I26sRM7FJDHg10jc4",
  //     },
  //   };

  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/find/976573?external_source=tvdb_id",
  //       options
  //     )
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };
  useEffect(() => {
    findMovieByID();
  }, []);

  //   const options = {
  //     method: "GET",
  //     url: "https://api.themoviedb.org/3/movie/615656/videos",
  //     params: { language: "en-US" },
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setMovieVideos(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [setMovieDetails, setMovieVideos]);

  return (
    <>
      <div className="w-full h-[1100px] text-white">
        <div className="w-full h-[1100px] ">
          <div className="absolute w-full h-[1100px] bg-gradient-to-r from-black" />
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}
            alt={movieDetails?.title}
          />
        </div>
        <div className="absolute w-full top-[35%] ml-[150px]">
          <h1 className="text-3xl md:text-5xl font-bold">
            {movieDetails?.title}
          </h1>
          <p className="text-gray-400 py-4 text-base">
            Released: {movieDetails?.release_date}
          </p>
          <div className="flex gap-3">
            {movieDetails?.production_companies.map((company) => {
              return (
                <p key={company.id} className="text-gray-400 pb-4 text-base">
                  {company.name}
                </p>
              );
            })}
          </div>
          <div className="flex gap-3">
            {movieDetails?.genres.map((genr) => {
              return (
                <p
                  key={genr.id}
                  className="text-gray-400 px-3 py-2 mb-4 text-base border-gray-400 rounded-full border-2"
                >
                  {genr.name}
                </p>
              );
            })}
          </div>
          <p className="text-lg font-medium w-[40%]">
            {" "}
            {movieDetails?.overview}
          </p>
        </div>
      </div>
      {/* <div className="ml-[150px] mt-8">
        <h1 className="text-4xl  font-semibold text-white">Trailer</h1>
         {movieVideos.map((movie) => {
          <h1>{movie.name}</h1>;
        })} 
      </div>
      */}
    </>
  );
};

export default MovieDetails;
