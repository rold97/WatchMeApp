import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import YouTube from "react-youtube";

const TVDetails = ({}) => {
  const { id } = useParams();
  const key = "1184cf59b751ed79cd2eace68f22426c";
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg0Y2Y1OWI3NTFlZDc5Y2QyZWFjZTY4ZjIyNDI2YyIsInN1YiI6IjY0Y2QyYjg4MmYyNjZiMDllZTNjNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fAoOuQ3hWkSwO2UpbB5iaBrL4I26sRM7FJDHg10jc4";
  const [TvDetails, setTVDetails] = useState();
  // const [movieVideos, setMovieVideos] = useState();

  const findMovieByID = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setTVDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    findMovieByID();
  }, []);

  return (
    <>
      <div className="w-full h-[1100px] text-white">
        <div className="w-full h-[1100px] ">
          <div className="absolute w-full h-[1100px] bg-gradient-to-r from-black" />
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${TvDetails?.backdrop_path}`}
            alt={TvDetails?.title}
          />
        </div>
        <div className="absolute w-full top-[35%] ml-[150px]">
          <h1 className="text-3xl md:text-5xl font-bold">{TvDetails?.title}</h1>
          <p className="text-gray-400  text-base">
            First air date:{"   "}
            <span className="text-white">{TvDetails?.first_air_date}</span>
          </p>
          <p className="text-gray-400 py-4 text-base">
            Last air date:{"   "}
            <span className="text-white">{TvDetails?.last_air_date}</span>
          </p>
          <div className="flex gap-3">
            {TvDetails?.genres.map((genr) => {
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
          <p className="text-lg font-medium w-[40%]"> {TvDetails?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default TVDetails;
