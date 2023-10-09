import React from "react";
// import classes from "./Navbar.module.css";

// import Button from "./UI/Button";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Search from "./UI/Search/Search";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute mr-[150px]">
      <Link to="/">
        <h1 className="text-[#DC276A] text-5xl font-bold cursor-pointer ml-36">
          Watch<span className="text-white">Me</span>
        </h1>
      </Link>
      {user?.email ? (
        <>
          <div className="flex gap-12 no-underline">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DC276A] hover:text-[#DC276A] uppercase transition-all easy-in-out"
                  : "text-white/80 uppercase  hover:text-white transition-all easy-in-out"
              }
            >
              Main
            </NavLink>
            <NavLink
              to="movies/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DC276A] hover:text-[#DC276A] uppercase transition-all easy-in-out"
                  : "text-white/80 uppercase  hover:text-white transition-all easy-in-out"
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="TVShows/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DC276A] hover:text-[#DC276A] uppercase transition-all easy-in-out"
                  : "text-white/80 uppercase  hover:text-white transition-all easy-in-out"
              }
            >
              TV Shows
            </NavLink>
            <NavLink
              to="cartoons/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DC276A] hover:text-[#DC276A] uppercase"
                  : "text-white/80 uppercase  hover:text-white transition-all easy-in-out"
              }
            >
              Cartoons
            </NavLink>
            <NavLink
              to="mycollection/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DC276A] hover:text-[#DC276A] uppercase"
                  : "text-white/80 uppercase  hover:text-white"
              }
            >
              My Collection
            </NavLink>
          </div>
          <div className="flex gap-3">
            <Search />
            <button
              onClick={handleLogout}
              className="bg-[#DC276A] hover:bg-transparent hover:text-[#DC276A] border-[#DC276A] border-2 py-3.5  px-10 rounded-3xl cursor-pointer text-white mr-32 hover:scale-105 transition-all ease"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div>
          <Link to="/login">
            <button className="bg-transparent py-3.5 px-10 rounded-3xl cursor-pointer text-[#DC276A] border-[#DC276A] border-2 mr-4 hover:scale-105 transition-all ease hover:bg-[#DC276A] hover:text-white">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#DC276A]  py-3.5  px-10 rounded-3xl cursor-pointer text-white mr-32 hover:scale-105 transition-all ease">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
