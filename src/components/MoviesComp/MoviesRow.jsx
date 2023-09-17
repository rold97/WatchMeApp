import React, { useEffect, useState } from "react";

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
      <div className="group relative flex items-center ">
        <MdChevronLeft
          size={60}
          className="bg-white rounded-full absolute opacity-80 cursor-pointer z-10 invisible left-[-15px] hover:bg-[#DC276A] group-hover:visible"
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full whitespace-nowrap scroll-smooth overflow-hidden relative"
        >
          {movies.map((item) => {
            return <Movie item={item} key={item.id} id={item.id} />;
          })}
        </div>
        <MdChevronRight
          size={60}
          className="bg-white rounded-full absolute opacity-80 cursor-pointer z-10 invisible right-[-15px] hover:bg-[#DC276A] group-hover:visible"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Row;
