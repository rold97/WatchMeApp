import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Cards from "./UI/Card/Card";

const MoviesListByActor = (props) => {
  const key = "1184cf59b751ed79cd2eace68f22426c";
  const [movies, setMovies] = useState();

  //   const getMoviesByActor = async () => {
  //     await axios
  //       .get(
  //         `https://api.themoviedb.org/3/person/${props.personId}/movie_credits
  //             ?api_key=${key}&language=en-US`
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         setMovies(response.data);
  //       })
  //       .catch((err) => console.error(err));
  //   };

  const getMoviesByActor = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg0Y2Y1OWI3NTFlZDc5Y2QyZWFjZTY4ZjIyNDI2YyIsInN1YiI6IjY0Y2QyYjg4MmYyNjZiMDllZTNjNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fAoOuQ3hWkSwO2UpbB5iaBrL4I26sRM7FJDHg10jc4",
      },
    };

    axios
      .get(
        `https://api.themoviedb.org/3/person/${props.personId}/movie_credits?language=en-US`,
        options
      )
      .then((response) => {
        console.log(response.data.cast);
        setMovies(response.data.cast);
      })
      .catch((err) => console.error(err));
  };
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    getMoviesByActor();
  }, []);


  return (
    <div>
      <div className="group relative flex items-center pb-24">
        <MdChevronLeft
          size={60}
          className="bg-white rounded-full absolute opacity-80 cursor-pointer z-[1000] invisible left-[-25px] hover:bg-[#DC276A] group-hover:visible text-black"
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-[350px] scroll-smooth overflow-hidden relative flex items-center gap-2"
        >
          {movies?.map((movie) => (
            <Cards movie={movie} key={movie.id} type="movie" />
          ))}
        </div>
        <MdChevronRight
          size={60}
          className="bg-white rounded-full absolute opacity-80 cursor-pointer z-[1000] invisible right-[-25px] hover:bg-[#DC276A] group-hover:visible text-black"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default MoviesListByActor;
