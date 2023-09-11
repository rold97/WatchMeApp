import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Cards from "../components/UI/Card/Card";
import axios from "axios";

const CartoonsList = () => {
  const [cartoonsList, setCartoonsList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const key = "1184cf59b751ed79cd2eace68f22426c";

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16&page=${page}`
      )
      .then((response) => {
        setTotalPages(response.data.total_pages);
        if (page === 1) {
          setCartoonsList(response.data.results);
          console.log(response);
        }
        if (page > 1) {
          cartoonsList.push(...response.data.results);
        }
        if (page === totalPages) {
          return;
        }
      });
  };
  useEffect(() => {
    getData();
  }, [page]);

  const pageIncrease = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="w-full text-white ">
        <img
          className="w-full h-[300px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[300px]"></div>
        <div className="absolute  left-[45%] top-[13%] ">
          <h1 className="text-3xl md:text-5xl font-bold">Cartoons</h1>
        </div>
      </div>
      <div className="flex content-center justify-center flex-wrap gap-8">
        {cartoonsList.map((cartoon) => (
          <Link to={`/movie/${cartoon.id}`} key={cartoon.id}>
            <Cards movie={cartoon} key={cartoon.id} />
          </Link>
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

export default CartoonsList;
