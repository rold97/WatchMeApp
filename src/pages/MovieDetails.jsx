import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoList from "../components/VideoList";
import SimilarList from "../components/SimilarList";

const MovieDetails = () => {
  const { id } = useParams();
  const key = "1184cf59b751ed79cd2eace68f22426c";

  const [movieDetails, setMovieDetails] = useState();
  // const [movieVideos, setMovieVideos] = useState();
  const [cast, setCast] = useState([]);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const findMovieByID = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((err) => console.error(err));
  };
  const findCast = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
      )
      .then((response) => {
        // console.log(response.data.cast.slice(0, 6));
        setCast(response.data.cast.slice(0, 6));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    findMovieByID();
    findCast();
    goToTop();
  }, [id]);

  return (
    <>
      <div className="w-full h-full text-white ">
        <div className="w-full h-[1100px] ">
          <div className="absolute w-full h-[1100px] bg-gradient-to-b from-black/40 to-black" />
          <img
            className="w-full h-[1100px] object-cover"
            src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}
            alt={movieDetails?.title}
          />
        </div>
        <div className="absolute w-full top-[25%] pl-[150px]">
          <div className="flex gap-12">
            <img
              className="w-[400px] shadow-2xl"
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

              <h2 className="text-3xl  font-semibold text-white mt-4">Cast</h2>
              <div className="flex gap-3 mt-5">
                {cast.map((actor) => {
                  return (
                    <Link to={`/actor/${actor.id}`} key={actor.id}>
                      <div className="group hover:scale-110 ~bg-black transition-all ease-in-out duration-200">
                        <img
                          className="w-[120px] opacity-75 group-hover:opacity-100"
                          src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
                          alt={actor?.name}
                        />
                        <p className="text-white">
                          {actor.name.length > 12
                            ? actor.name.slice(0, 12) + " ..."
                            : actor.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <section className="px-36 bg-black">
          <VideoList type="movie" id={id} />
        </section>
        <section className="px-36 bg-black">
          <h2 className="text-3xl  font-semibold text-white pt-4">
            Something similar...
          </h2>
          <SimilarList type="movie" id={id} />
        </section>
      </div>
    </>
  );
};

export default MovieDetails;
