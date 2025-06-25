import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Sign_up = () => {
  const sign_in = useNavigate();
  const hnadleSign_in = () => {
    sign_in("/Sign_in");
  };
  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen px-4 bg-gray-50 dark:bg-black dark:text-white "
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="mb-12 text-3xl font-semibold text-center text-gray-900 dark:text-white">
            Create your account
          </h1>

          {/* Login Buttons */}
          <div className="space-y-4">
            {/* Login with X */}
            <button className="flex items-center justify-center w-full px-6 py-4 space-x-3 text-white transition-colors bg-black rounded-full dark:bg-white hover:bg-gray-800 ">
              <FaXTwitter className="text-[23px]  dark:text-gray-700" />
              <span className="font-medium dark:text-gray-700">
                Login with X
              </span>
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

          {/* Sign up link */}
          <div className="mt-8 text-center text-gray-600 dark:text-white_color">
            <span>Already have an account? </span>
            <button
              onClick={hnadleSign_in}
              className="font-medium text-gray-900 hover:underline dark:text-white_color"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sign_up;
