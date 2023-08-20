import React from "react";
// import classes from "./Navbar.module.css";

// import Button from "./UI/Button";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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
              to=""
              className={({ isActive }) =>
                isActive ? "text-[#DC276A] hover:text-[#DC276A]" : "text-white"
              }
            >
              Movies
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "text-[#DC276A] hover:text-[#DC276A]" : "text-white"
              }
            >
              Series
            </NavLink>{" "}
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "text-[#DC276A] hover:text-[#DC276A]" : "text-white"
              }
            >
              Cartoons
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "text-[#DC276A] hover:text-[#DC276A]" : "text-white"
              }
            >
              My Collection
            </NavLink>
          </div>
          <div>
            <Link to="/account">
              <button className="bg-transparent py-3.5 px-10 rounded-md cursor-pointer text-[#DC276A] border-[#DC276A] border-2 mr-4 hover:scale-105 transition-all ease">
                Account
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-[#DC276A]  py-3.5  px-10 rounded-md cursor-pointer text-white mr-32 hover:scale-105 transition-all ease"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div>
          <Link to="/login">
            <button className="bg-transparent py-3.5 px-10 rounded-md cursor-pointer text-[#DC276A] border-[#DC276A] border-2 mr-4 hover:scale-105 transition-all ease">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#DC276A]  py-3.5  px-10 rounded-md cursor-pointer text-white mr-32 hover:scale-105 transition-all ease">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

// );

export default Navbar;
