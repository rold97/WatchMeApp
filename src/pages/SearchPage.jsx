import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../components/UI/Search2/Search";
import Cards from "../components/UI/Card/Card";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [movieData, setMovieData] = useState();
  const [page, setPage] = useState(1);
  const { keyword } = useParams();

  const findMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg0Y2Y1OWI3NTFlZDc5Y2QyZWFjZTY4ZjIyNDI2YyIsInN1YiI6IjY0Y2QyYjg4MmYyNjZiMDllZTNjNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fAoOuQ3hWkSwO2UpbB5iaBrL4I26sRM7FJDHg10jc4",
      },
    };
    await axios
      .get(
        `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=true&language=en-US&page=1`,
        options
      )
      .then((response) => {
        console.log(response.data.results);
        setMovieData(response.data.results);
      })
      .catch((err) => console.error(err));
  };
  const pageIncrease = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    findMovie();
  }, [keyword]);

  return (
    <>
      <div className="w-full text-white ">
        <img
          className="w-full h-[300px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-gradient-to-b from-black/50 to-[#0f1015] fixed top-0 left-0 w-full h-[300px]"></div>
        <div className="absolute  left-[45%] top-[13%] ">
          <h1 className="text-3xl md:text-5xl font-bold">Search results</h1>
        </div>
      </div>
      <div className="flex justify-center py-12"></div>
      <div className="flex content-center justify-center flex-wrap gap-8 ">
        {movieData?.map((movie) => (
          <Cards movie={movie} key={movie.id} type="movie" />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-transparent hover:bg-[#DC276A] border-[#DC276A] my-7 py-3.5  px-10 rounded-3xl cursor-pointer text-[#DC276A] hover:text-white mr-32 hover:scale-105 transition-all ease border-2"
          onClick={pageIncrease}
        >
          Load more...
        </button>
      </div>
    </>
  );
};

export default SearchPage;
