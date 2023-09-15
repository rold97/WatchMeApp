import axios from "axios";
import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { useParams } from "react-router-dom";
// import YouTube from "react-youtube";

const MovieDetails = ({}) => {
  const { id } = useParams();
  const key = "1184cf59b751ed79cd2eace68f22426c";

  const [movieDetails, setMovieDetails] = useState();
  // const [movieVideos, setMovieVideos] = useState();
  const [cast, setCast] = useState([]);

  const findMovieByID = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setMovieDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };
  const findCast = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.cast.slice(0, 6));
        setCast(response.data.cast.slice(0, 6));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    findMovieByID();
    findCast();
  }, []);

  return (
    <>
      <div className="w-full h-[1100px] text-white">
        <div className="w-full h-[1100px] ">
          <div className="absolute w-full h-[1100px] bg-gradient-to-b from-black/40 to-black" />
          <img
            className="w-full h-[1100px] object-cover"
            src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}
            alt={movieDetails?.title}
          />
        </div>
        <div className="absolute w-full top-[25%] ml-[150px]">
          <div className="flex gap-12">
            <img
              className="w-[400px]"
              src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
              alt={movieDetails?.title}
            />

            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                {movieDetails?.title}
              </h1>
              <p className="text-gray-400 py-4 text-base">
                Released: {movieDetails?.release_date}
              </p>
              <div className="flex gap-3">
                {movieDetails?.production_companies.map((company) => {
                  return (
                    <p
                      key={company.id}
                      className="text-gray-400 pb-4 text-base"
                    >
                      {company.name}
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-3 ">
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
              <p className="text-lg font-medium w-[70%]">
                {" "}
                {movieDetails?.overview}
              </p>

              <h1 className="text-3xl  font-semibold text-white mt-4">Casts</h1>
              <div className="flex gap-3 mt-5">
                {cast.map((actor) => {
                  return (
                    <div>
                      <img
                        key={actor.id}
                        className="w-[120px]"
                        src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
                        alt={actor?.name}
                      />
                      <p className="text-white">
                        {actor.name.length > 12
                          ? actor.name.slice(0, 12) + " ..."
                          : actor.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
