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
      console.log(response.data);
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
    <div className={classes.rowFragment}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.rowBar}>
        <MdChevronLeft
          size={60}
          className={classes.sliderButtonLeft}
          onClick={slideLeft}
        />
        <div id={"slider" + rowID} className={classes.slider}>
          {movies.map((item) => {
            return <Movie item={item} key={item.id} />;
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
