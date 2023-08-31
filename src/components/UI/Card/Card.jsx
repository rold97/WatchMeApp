import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import classes from "../Card/Card.module.css";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

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
        <div className={classes.cards}>
          <img
            className={classes.cards__img}
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : movie.backdrop_path
            }`}
            alt="img"
          />
          <div className={classes.cards__overlay}>
            <div className={classes.card__title}>
              {movie ? movie.original_title : ""}
            </div>
            <div className={classes.card__runtime}>
              {movie ? movie.release_date : ""}
              <span className={classes.card__rating}>
                {movie ? movie.vote_average : ""}
                {/* <i className="fas fa-star" /> */}
              </span>
            </div>
            <div className={classes.card__description}>
              {movie ? movie.overview.slice(0, 118) + "..." : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
