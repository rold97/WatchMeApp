import React from "react";
import img from "../assets/mockup.webp";
import classes from "./Main.module.css";

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
          <button
            type="button"
            className="bg-[#DC276A]  py-5  px-14 rounded-3xl cursor-pointer text-white mr-32 hover:scale-105 transition-all ease"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
