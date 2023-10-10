import React from "react";
import img from "../assets/mockup.webp";

const Main = () => {
  // useEffect(() => {
  //   axios.get(requests.requestPopular).then((response) => {
  //     setMovies(response.data);
  //   });
  // }, []);

  return (
    <div className="h-[600px] z-[100]">
      <div className="rounded-[100%] w-[600px] h-[350px] bg-transparent border-solid border-[4px] border-[#DC276A] absolute top-[200px] left-[1150px] rotate-[35deg]" />
      <img
        src={img}
        alt="img"
        className="w-[500px] absolute top-[200px] left-[1200px] drop-shadow-2xl"
      />

      <div className="text-white absolute left-[150px] top-[220px]">
        <p className="text-xl">
          A library of movies and TV shows <br />
          you can watch anywhere
        </p>
        <h1 className="text-5xl my-[20px]">
          Movies, TV shows and much more <br /> without limits
        </h1>
        <div>
          <p className="text-medium">Still not with use?</p>
          <button
            type="button"
            className="bg-[#DC276A]  py-5  px-14 rounded-3xl cursor-pointer text-white hover:scale-105 transition-all ease"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
