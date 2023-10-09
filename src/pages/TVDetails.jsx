import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoList from "../components/VideoList";
import SimilarList from "../components/SimilarList";
// import YouTube from "react-youtube";

const TVDetails = ({}) => {
  const { id } = useParams();
  const key = "1184cf59b751ed79cd2eace68f22426c";

  const [TvDetails, setTVDetails] = useState();
  const [cast, setCast] = useState([]);
  // const [movieVideos, setMovieVideos] = useState();

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const findMovieByID = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`
      )
      .then((response) => {
        setTVDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

  const findCast = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}&language=en-US`
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
      <div className="w-full h-[1100px] text-white">
        <div className="w-full h-[1100px] ">
          <div className="absolute w-full h-[1100px] bg-gradient-to-b from-black/40 to-black" />
          <img
            className="w-full h-[1100px] object-cover"
            src={`https://image.tmdb.org/t/p/original/${TvDetails?.backdrop_path}`}
            alt={TvDetails?.title}
          />
        </div>
        <div className="absolute w-full top-[25%] ml-[150px]">
          <div className="flex gap-12 items-center">
            <img
              className="w-[400px] shadow-2xl"
              src={`https://image.tmdb.org/t/p/original/${TvDetails?.poster_path}`}
              alt={TvDetails?.title}
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                {TvDetails?.title}
              </h1>
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
                      className="text-gray-400 px-3 py-2 mb-4 text-base border-gray-400 rounded-full border-2 "
                    >
                      {genr.name}
                    </p>
                  );
                })}
              </div>
              <p className="text-lg font-medium w-[70%]">
                {" "}
                {TvDetails?.overview}
              </p>
              <h2 className="text-3xl font-semibold text-white mt-4">Cast</h2>
              <div className="flex gap-3 mt-5">
                {cast.map((actor) => {
                  return (
                    <Link to={`/actor/${actor.id}`}>
                      <div
                        key={actor.id}
                        className="group hover:scale-110 duration-200 ease-in-out"
                      >
                        <img
                          className="w-[120px] opacity-75 group-hover:opacity-100 "
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
          <VideoList type="tv" id={id} />
        </section>
        <section className="px-36 bg-black">
          <h2 className="text-3xl font-semibold text-white pt-4">
            Something similar...
          </h2>
          <SimilarList type="tv" id={id} />
        </section>
      </div>
    </>
  );
};

export default TVDetails;
