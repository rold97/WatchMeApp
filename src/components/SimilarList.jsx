import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./UI/Card/Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SimilarList = (props) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  const key = "1184cf59b751ed79cd2eace68f22426c";

  useEffect(() => {
    const getSimilarMovies = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/${props.type}/${props.id}/similar?api_key=${key}&language=en-US`
        )
        .then((response) => {
          // console.log(response.data.results);
          setSimilarMovies(response.data.results);
        })
        .catch((err) => console.error(err));
    };
    getSimilarMovies();
  }, [props.type, props.id]);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

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
          {similarMovies.map((movie) => (
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

    // <div>
    //   {similarMovies.map((movie) => (
    //     <Cards movie={movie} key={movie.id} type="movie" />
    //   ))}
    // </div>
  );
};

export default SimilarList;
