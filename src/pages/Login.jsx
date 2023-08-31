import img from "../img/movieBG.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import Error from "../components/UI/Error/Error";

const Login = () => {
  const { user, logIn } = UserAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  let errorMessage = "";
  if (error === "Firebase: Error (auth/wrong-password).") {
    errorMessage = "Wrong password. Try again!";
  } else {
    errorMessage = "Wrong email . Try again! ";
  }
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover blur-sm"
          src={img}
          alt="/"
        />
        <div className="bg-gradient-to-b from-stone-900 to-white-50/0 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 text-white rounded-xl">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Log In</h1>
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
                  Log In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-12">
                  <span className="text-[gray-600]">
                    Still not subscribed to WatchMe?
                  </span>{" "}
                  <Link to="/signup" className="text-[#DC276A] font-black">
                    Sign Up
                  </Link>
                </p>
              </form>
              {error === "" ? "" : <Error text={errorMessage} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
