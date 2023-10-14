import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="grid min-h-[80vh] place-items-center bg-[#0f1015] px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center z-50">
          <p className="text-base font-bold text-[#DC276A]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-xl bg-[#DC276A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#dc2769de] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DC276A] hover:scale-105 ease-in-out duration-300"
            >
              Go back home
            </Link>
            <Link
              to="#"
              className="text-sm font-semibold text-gray-300 border-solid border-[1px] border-gray-300 px-3.5 py-2.5 rounded-xl hover:scale-105 ease-in-out duration-300"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
