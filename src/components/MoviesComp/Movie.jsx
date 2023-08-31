import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import classes from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const trancatedString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <Link className="no-underline" to={`/movie/${item.id}`}>
        <div className={classes.row} id={item?.id}>
          {/* <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[400px] inline-block cursor-pointer relative p-2"> */}

          <img
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            alt={item?.title}
            className={classes.movieImg}
            id={item?.id}
          ></img>
          <p className={classes.movieTitle} id={item?.id}>
            {trancatedString(item?.title, 35)}
          </p>
          <div className={classes.overlay} id={item?.id}>
            {
              <BsPlayCircleFill
                className={classes.BsPlay}
                size="4.5rem"
                id={item?.id}
              />
            }
          </div>
        </div>
      </Link>
    </>
  );
};

export default Movie;
