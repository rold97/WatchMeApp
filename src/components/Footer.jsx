import React from "react";

import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTelegram, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex justify-center gap-20 items-center max-h-[250px] mx-[150px] mt-4">
      <div className="flex justify-center ">
        <div className="grid grid-cols-4 gap-40 text-white">
          <div>
            <Link to="/">
              <h1 className="text-[#DC276A] text-5xl font-bold cursor-pointer ">
                Watch<span className="text-white">Me</span>
              </h1>
            </Link>
            <div className="flex gap-6 justify-center items-center pt-8">
              <div className="group relative">
                <a href="https://www.facebook.com/" target="blank">
                  <SiFacebook className="w-8 hover:scale-125 duration-200 hover:text-[#DC276A]" />
                </a>
                <span
                  className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-[#DC276A] bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-110 text-[#DC276A]"
                >
                  Facebook<span></span>
                </span>
              </div>
              <div className="group relative">
                <a href="https://www.instagram.com/" target="blank">
                  <SiInstagram className="w-8 hover:scale-125 duration-200 hover:text-[#DC276A]" />
                </a>
                <span
                  className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-[#DC276A] bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-[#DC276A]"
                >
                  Instagram<span></span>
                </span>
              </div>
              <div className="group relative">
                <a href="https://telegram.org/" target="blank">
                  <SiTelegram className="w-8 hover:scale-125 duration-200 hover:text-[#DC276A]" />
                </a>
                <span
                  className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-[#DC276A] bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-[#DC276A]"
                >
                  Telegram<span></span>
                </span>
              </div>
              <div className="group relative">
                <a href="https://twitter.com/?lang=uk" target="blank">
                  <SiTwitter className="w-8 hover:scale-125 duration-200 hover:text-[#DC276A]" />
                </a>
                <span
                  className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-[#DC276A] bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-[#DC276A]"
                >
                  Twitter<span></span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex start flex-col mt-4 text-base">
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              Home
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              Contact us
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              Term of services
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              About us
            </Link>
          </div>
          <div className="flex start flex-col mt-4 ">
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              Live
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              FAQ
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              Premium
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              Pravacy policy
            </Link>
          </div>
          <div className="flex start flex-col mt-4 text-base">
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] text-base transition-all duration-300 ease-linear"
            >
              You must watch
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] transition-all duration-300 ease-linear"
            >
              Recent release
            </Link>
            <Link
              to="/"
              className="py-2 hover:scale-105 hover:text-[#DC276A] transition-all duration-300 ease-linear"
            >
              Top IMDB
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
