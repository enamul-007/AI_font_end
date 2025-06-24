import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Sign_in = () => {
  const sign_up = useNavigate();
  const hnadleSign_up = () => {
    sign_up("/Sign_up");
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-gray-50"
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
    >
      <div className="w-full max-w-md">
        {/* Title */}
        <h1 className="mb-12 text-3xl font-semibold text-center text-gray-900">
          Log into your account
        </h1>

        {/* Login Buttons */}
        <div className="space-y-4">
          {/* Login with X */}
          <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 text-white transition-colors bg-black rounded-full hover:bg-gray-800">
            <FaXTwitter  className="text-[23px]"/>
            <span className="font-medium">Login with X</span>
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
          <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 text-gray-700 transition-colors bg-white border-2 rounded-full gray-300 border- hover:border-orange-300">
            <IoLogoApple className="text-[30px] text-black_color" />
            <span className="font-medium">Login with Apple</span>
          </button>
        </div>

        {/* Last logged in info */}
        <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
          <div className="w-2 h-2 mr-2 bg-orange-400 rounded-full"></div>
          <span>You last logged in with Google</span>
        </div>

        {/* Sign up link */}
        <div className="mt-8 text-center text-gray-600">
          <span>Don't have an account? </span>
          <button
            onClick={hnadleSign_up}
            className="font-medium text-gray-900 hover:underline"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sign_in;
