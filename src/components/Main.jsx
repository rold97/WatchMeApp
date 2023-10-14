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

      <div className="text-white absolute left-[150px] top-[270px]">
        <p className="text-xl">
          A library of movies and TV shows <br />
          you can watch anywhere
        </p>
        <h1 className="text-5xl my-[20px]">
          Movies, TV shows and much more <br />{" "}
          <span className="text-[#DC276A]">without limits</span>
        </h1>
      </div>
    </div>
  );
};

export default Main;
