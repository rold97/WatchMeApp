import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

// import Cards from "./UI/Card/Card";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      console.log(movies);
      setMovies(doc.data()?.savedShows);
      console.log(doc.data()?.savedShows);
      // console.log(movies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative flex items-center group mx-36 mt-16">
        <div className="flex content-center justify-center flex-wrap gap-8">
          {movies ? (
            movies.map((movie) => (
              <div
                className="flex flex-col justify-center items-center "
                key={movie.id}
              >
                <div className="group inline-block relative rounded-[10px] overflow-hidden m-[0.2rem] pointer min-w-[200px] h-[300px] z-0  border-solid border-[1px] border-[#636363] transition-transform ease-in-out duration-300 hover:scale-110 hover:z-[1000] hover:shadow-xl hover:border-[#dc276a] cursor-pointer">
                  <AiOutlineClose
                    size={25}
                    onClick={() => deleteShow(movie.id)}
                    className="absolute top-3 right-3 text-white z-10 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300 cursor-pointer"
                  />

                  <Link
                    to={`/${movie.first_air_date === "" ? "movie" : "tv"}/${
                      movie.id
                    }`}
                    key={movie.id}
                  >
                    <div className=" absolute px-4 pb-4 h-[300px] flex flex-col w-full justify-end bg-gradient-to-b from-black/20 to-black bottom-0 opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 hover:scale-110">
                      <div className="font-black text-base mb-2 text-white">
                        {movie ? movie.original_title || movie.title : ""}
                      </div>
                      <div className="text-xs mb-1 text-white ">
                        {movie ? movie.release_date : ""}
                        <span className="float-right">
                          {movie ? movie.vote_average : ""}
                          {/* <i className="fas fa-star" /> */}
                        </span>
                      </div>
                      <div className="italic text-xs mb-1 text-white">
                        {movie.overview
                          ? movie?.overview.slice(0, 118) + "..."
                          : ""}
                      </div>
                    </div>

                    <img
                      className="h-[300px]"
                      src={`https://image.tmdb.org/t/p/original${
                        movie ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt="img"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xl text-white">Your collection is empty</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedShows;
