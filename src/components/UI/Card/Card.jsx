import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import classes from "../Card/Card.module.css";
import { db } from "../../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";

const Cards = ({ movie, type }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title || movie.name,
          poster_path: movie.poster_path,
          release_date: movie.release_date ? movie.release_date : "",
          first_air_date: movie.first_air_date ? movie.first_air_date : "",
          overview: movie.overview,
          vote_average: movie.vote_average,
          genre_ids: movie.genre_ids,
        }),
      });
    } else {
      alert("Please, log in to save a movie");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // get data from firestore database !!!
  let movieInfo = [];
  const colRef = collection(db, "users");
  getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id === user.email) {
          // console.log(doc.data());
          // console.log(doc.id);
          movieInfo.push({ ...doc.data() });
        } else {
          return;
        }
      });
      // console.log(movieInfo);
      // movieInfo.forEach((movie) => console.log(movie.id));
      // console.log(user.email);
    })
    .catch((err) => {
      console.error(err.message);
    });

  return (
    <>
      {isLoading ? (
        <div className="inline-block relative rounded-[10px] overflow-hidden m-[0.2rem] pointer min-w-[200px] h-[300px] z-0 border border-solid border-[#636363] transition-transform ease-in-out delay-[2000ms]">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="group inline-block relative rounded-[10px] overflow-hidden m-[0.2rem] pointer min-w-[200px] h-[300px] z-0  border-solid border-[1px] border-[#636363] transition-transform ease-in-out duration-300 hover:scale-110 hover:z-[1000] hover:shadow-xl hover:border-[#dc276a] ">
          <div>
            {like ? (
              <AiFillHeart
                className="absolute top-3 left-3 text-white z-10 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300 group-hover:scale-110 cursor-pointer"
                size={25}
              />
            ) : (
              <AiOutlineHeart
                className="absolute top-3 left-3 text-white z-10 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300 group-hover:scale-110 cursor-pointer"
                size={25}
                onClick={saveMovie}
              />
            )}
          </div>
          <Link to={`/${type}/${movie.id}`} key={movie.id}>
            <img
              className="h-[300px]"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : movie.backdrop_path
              }`}
              alt="img"
            />

            <div className="absolute px-4 pb-4 h-[300px] flex flex-col w-full justify-end bg-gradient-to-b from-black/20 to-black bottom-0 opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 hover:scale-110">
              <div className="font-black text-base mb-2 text-white">
                {movie ? movie.original_title || movie.title : ""}
              </div>
              <div className="text-xs mb-1 text-white ">
                {movie ? movie.release_date : ""}
                <span className="float-right">
                  {movie ? movie.vote_average : ""}
                  {/* <i className="fas fa-star" /> */}
                </span>
              </div>
              <div className="italic text-xs mb-1 text-white">
                {movie.overview ? movie?.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cards;
