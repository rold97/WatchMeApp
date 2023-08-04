import React, { Fragment } from "react";
import img from "../img/mockup.png";
import classes from "./Main.module.css";
import Button from "./UI/Button";
import ButtonTransparent from "./UI/ButtonTransparent";

const Main = () => {
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
        <div>
          <Button className={classes.btn}>Subscribe</Button>
          <ButtonTransparent>Go to tarrifs</ButtonTransparent>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
