import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import classes from "./Movie.module.css";

const Movie = ({ item }) => {
  return (
    <>
      <div className={classes.row}>
        {/* <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[400px] inline-block cursor-pointer relative p-2"> */}

        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
          className={classes.movieImg}
        ></img>
        <p className={classes.movieTitle}>{item?.title}</p>
        <div className={classes.overlay}>
          {<BsPlayCircleFill className={classes.BsPlay} size="5rem" />}
        </div>
      </div>
    </>
  );
};

export default Movie;
