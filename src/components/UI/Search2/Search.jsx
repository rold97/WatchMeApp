import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setKeyword(event.target.value);
    setTitle(event.target.value);
  };

  const goToSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (keyword.trim().length > 0) {
        navigate(`/${props.category}/search/${keyword}`);
        setTitle("");
      }
    },
    [keyword, navigate, props.category]
  );

  // const goToSearch = (e) => {
  //   e.preventDefault();
  //   if (keyword.trim().length > 0) {
  //     navigate(`/${props.category}/search/${keyword}`);
  //     setTitle("");
  //   }
  // };

  return (
    <form className="w-[400px]" onSubmit={goToSearch}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[3rem] bg-gray-50 focus:ring-[rgb(220,39,106)] focus:border-[rgb(220,39,106)]"
          placeholder="Search By Name..."
          required
          value={title}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-[rgb(220,39,106)] hover:bg-[rgb(221,60,106)] hover:scale-110 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-[rgb(220,39,106)]/40 font-medium rounded-[3rem] text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
