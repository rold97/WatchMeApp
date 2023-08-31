import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Cards from "../components/UI/Card/Card";
import axios from "axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTg0Y2Y1OWI3NTFlZDc5Y2QyZWFjZTY4ZjIyNDI2YyIsInN1YiI6IjY0Y2QyYjg4MmYyNjZiMDllZTNjNDBiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fAoOuQ3hWkSwO2UpbB5iaBrL4I26sRM7FJDHg10jc4";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const getData = () =>
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        options
      )

      .then((response) => {
        setTotalPages(response.data.total_pages);
        if (page === 1) {
          setMovieList(response.data.results);
          console.log(response);
        }
        if (page > 1) {
          movieList.push(...response.data.results);
        }
        if (page === totalPages) {
          return;
        }
      })
      .catch((err) => console.error(err));

  useEffect(() => {
    getData();
  }, [page]);

  const pageIncrease = () => {
    setPage(page + 1);
  };

  // useEffect(() => {
  //   getData();
  // }, [type]);

  // const getData = () => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${
  //       type ? type : "popular"
  //     }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setMovieList(data.results));
  // };

  return (
    <div className="pt-[100px] mx-36">
      <div className="flex justify-center">
        <h2 className="text-start text-3xl m-10 uppercase text-white">
          all movies
        </h2>
      </div>
      <div className="flex content-center justify-center flex-wrap gap-8">
        {movieList.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Cards movie={movie} key={movie.id} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-transparent hover:bg-[#DC276A] border-[#DC276A] my-7 py-3.5  px-10 rounded-md cursor-pointer text-[#DC276A] hover:text-white mr-32 hover:scale-105 transition-all ease border-2"
          onClick={pageIncrease}
        >
          Load more...
        </button>
      </div>
    </div>
  );
};

export default MovieList;
