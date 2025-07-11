import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Sign_in = () => {
  const sign_up = useNavigate();
  const handleSign_up = () => {
    sign_up("/Sign_up");
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-gray-50 dark:bg-black"
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
    >
      <div className="w-full max-w-md">
        {/* Title */}
        <h1 className="mb-12 text-3xl font-semibold text-center text-gray-900 dark:text-white">
          Log into your account
        </h1>

        {/* Login Buttons */}
        <div className="space-y-4">
          {/* Login with X */}
          <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 text-white transition-colors bg-black border-2 rounded-full hover:bg-gray-800 dark:bg-white dark:hover:border-orange-300 ">
            <FaXTwitter className="text-[23px] dark:text-gray-700" />
            <span className="font-medium dark:text-gray-700">Login with X</span>
          </button>

          {/* Login with Email */}
          <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 text-gray-700 transition-colors bg-white border-2 border-gray-300 rounded-full hover:border-orange-300">
            <CiMail className="text-[25px] text-black_color" />
            <span className="font-medium">Login with email</span>
          </button>

          {/* Login with Google - Highlighted */}
          <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 text-gray-700 transition-all bg-white border-2 rounded-full hover:border-orange-300">
            <FaGoogle className="text-[23px] text-black_color" />
            <span className="font-medium">Login with Google</span>
          </button>

          {/* Login with Apple */}
          <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 text-gray-700 transition-colors bg-white border-2 border-gray-300 rounded-full hover:border-orange-300">
            <IoLogoApple className="text-[30px] text-black_color" />
            <span className="font-medium">Login with Apple</span>
          </button>
        </div>

        {/* Last logged in info */}
        <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
          <div className="w-2 h-2 mr-2 bg-orange-400 rounded-full dark:bg-green-300"></div>
          <span className=" dark:text-white">
            You last logged in with Google
          </span>
        </div>

        {/* Sign up link */}
        <div className="pl-3 mt-8 text-center text-gray-600 dark:text-white">
          <span>Don't have an account? </span>
          <button
            onClick={handleSign_up}
            className="font-medium text-gray-900 hover:underline dark:text-gray-50"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sign_in;
