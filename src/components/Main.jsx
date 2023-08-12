import React from "react";
import img from "../img/mockup.png";
import classes from "./Main.module.css";
import Button from "./UI/Button";

const Main = () => {
  // useEffect(() => {
  //   axios.get(requests.requestPopular).then((response) => {
  //     setMovies(response.data);
  //   });
  // }, []);

  return (
    <div className={classes.main}>
      <div className={classes.oval} />
      <img src={img} alt="img" className={classes.mainImg} />
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
          <Button className={classes.btn}>Subscribe</Button>
          <Button className={classes.btnTrans}>Go to tarrifs</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
