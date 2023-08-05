import React, { Fragment, useEffect, useState } from "react";
import img from "../img/mockup.png";
import classes from "./Main.module.css";
import Button from "./UI/Button";
import axios from "axios";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data);
    });
  }, []);
  console.log(movies);

  return (
    <Fragment>
      <div className={classes.oval} />
      <img src={img} alt="img" />
      <div className={classes.ovalSecond} />
      <div className={classes.mainText}>
        <p>
          A library of movies and TV shows <br />
          you can watch anywhere
        </p>
        <h1>
          Movies, TV shows and much more <br /> without limits
        </h1>
        <div className={classes.buttons}>
          <Button>Subscribe</Button>
          <Button className={classes.btnTrans}>Go to tarrifs</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
