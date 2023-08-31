import React, { useEffect, useState } from "react";
import classes from "./MoviesRow.module.css";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="mx-[150px] mt-20">
      <div className=" w-full flex items-center justify-between">
        <h2 className="text-white text-xl uppercase">{title}</h2>

        <p className="text-white/70 text-xl ">See more...</p>
      </div>
      <div className={classes.rowBar}>
        <MdChevronLeft
          size={60}
          className={classes.sliderButtonLeft}
          onClick={slideLeft}
        />
        <div id={"slider" + rowID} className={classes.slider}>
          {movies.map((item) => {
            return <Movie item={item} key={item.id} id={item.id} />;
          })}
        </div>
        <MdChevronRight
          size={60}
          className={classes.sliderButtonRight}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Row;
