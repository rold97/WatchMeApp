import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import img from "../assets/movieBG.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover blur-sm"
          src={img}
          alt="/"
        />
        <div className="bg-gradient-to-b from-stone-900 to-white-50/0 fixed top-0 left-0 w-full h-screen center"></div>
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 text-white rounded-xl">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4 "
              >
                <input
                  onChange={emailHandler}
                  className="p-3 my-2 bg-gray-300 rounded-xl placeholder-gray-800 text-black"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={passwordHandler}
                  className="p-3 my-2 bg-gray-300 rounded-xl placeholder-gray-800 text-black"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-[#DC276A] py-3 my-6 rounded-xl font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <p>
                    <input type="checkbox" className="mr-2 " />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-12">
                  <span className="text-[gray-600]">
                    Already subscribed to WatchMe?
                  </span>{" "}
                  <Link to="/login" className="text-[#DC276A] font-black">
                    Log In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
