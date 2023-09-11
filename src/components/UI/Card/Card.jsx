import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import classes from "../Card/Card.module.css";
import { db } from "../../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
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
          release_date: movie.release_date || movie.first_air_date,
          overview: movie.overview,
          vote_average: movie.vote_average,
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

  return (
    <>
      {isLoading ? (
        <div className={classes.cards}>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        // <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className={classes.cards}>
          {like ? (
            <AiFillHeart className={classes.like} size={25} />
          ) : (
            <AiOutlineHeart
              className={classes.like}
              size={25}
              onClick={saveMovie}
            />
          )}

          <img
            className={classes.cards__img}
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : movie.backdrop_path
            }`}
            alt="img"
          />

          <div className={classes.cards__overlay}>
            <div className={classes.card__title}>
              {movie ? movie.original_title || movie.title : ""}
            </div>
            <div className={classes.card__runtime}>
              {movie ? movie.release_date : ""}
              <span className={classes.card__rating}>
                {movie ? movie.vote_average : ""}
                {/* <i className="fas fa-star" /> */}
              </span>
            </div>
            <div className={classes.card__description}>
              {movie.overview ? movie?.overview.slice(0, 118) + "..." : ""}
            </div>
          </div>
        </div>
        // </Link>
      )}
    </>
  );
};

export default Cards;
