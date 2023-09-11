import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

import Cards from "./UI/Card/Card";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <div className="relative flex items-center group mx-36 mt-16">
        <div className="flex content-center justify-center flex-wrap gap-8">
          {movies ? (
            movies.map((movie) => <Cards movie={movie} key={movie.id} />)
          ) : (
            <p className="text-xl text-white">Your collection is empty</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedShows;
