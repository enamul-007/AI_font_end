import React, { useState, useRef, useEffect } from "react";
import Logo from "../../images/grok-logo.png";
import Logo2 from "../../images/grok2.png";
import { LuTextSearch } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { PiDevicesLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  const [setting, setSetting] = useState(false);
  const handleSetting = () => {
    setSetting(!setting);
  };
  const signUp = useNavigate();
  const handleSignup = () => {
    signUp("/Sign_up");
  };
  const signin = useNavigate();
  const handleSignIn = () => {
    signin("/Sign_in");
  };
  const homepage = useNavigate();
  const HandleHomepage = () => {
    homepage("/");
  };
  const [history, setHistory] = useState(false);
  const handleHistory = () => {
    setHistory(!history);
  };
  const [ShowAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  const SettingRrf = useRef(null);
  const handleClicksettingOutside = (event) => {
    if (SettingRrf.current && !SettingRrf.current.contains(event.target)) {
      setSetting(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClicksettingOutside);
    return () => {
      document.removeEventListener("mousedown", handleClicksettingOutside);
    };
  }, []);
  const historyRef = useRef(null);
  const handleHistoryOutside = (outside) => {
    if (historyRef.current && !historyRef.current.contains(outside.target)) {
      setHistory(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleHistoryOutside);
    return () => {
      document.removeEventListener("mousedown", handleHistoryOutside);
    };
  }, []);

  const EnableDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };
  const EnableLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-black">
      <div className="container px-4 pt-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={HandleHomepage} className="w-10 h-10 cursor-pointer">
            <img
              src={Logo}
              alt="logo"
              className="object-contain w-full h-full dark:hidden"
            />
            <img
              src={Logo2}
              alt={Logo2}
              className="hidden object-contain w-full h-full dark:block"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Search Icon - Hidden on mobile */}
            <div ref={historyRef} className=" xs:block sm:block xl:block">
              <span>
                <button
                  onClick={handleHistory}
                  className="flex items-center justify-center w-10 h-10 text-[22px] rounded-full hover:border hover:border-gray_color hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <LuTextSearch />
                </button>
              </span>
              {history && (
                <div className="absolute z-50 bg-slate-50 dark:text-white">
                  <div
                    className="absolute w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-[500px] xl:top-0 xl:left-[-400px]
                  transform -translate-x-1/2 border rounded-xl shadow-lg dark:border-gray-500  bg-slate-50 dark:bg-gray-950"
                  >
                    <div className="flex items-center">
                      <input
                        className="w-full p-4 font-josefin text-black_color dark:bg-gray-800 dark:text-white"
                        placeholder="Search..."
                        type="text"
                      />
                      <FiSearch className="text-[25px] absolute right-5 cursor-pointer" />
                    </div>
                    <div className="w-full h-[0.5px] bg-gray-300 dark:bg-gray-500"></div>
                    <div className="flex items-center justify-between p-4">
                      <p className="text-gray_color font-josefin">Actions</p>
                      <div>
                        <span>
                          <button
                            onClick={handleShowAll}
                            className="transition-all text-gray_color font-josefin hover:text-black_color dark:hover:text-white"
                          >
                            {ShowAll ? "Show Less" : "Show All"}
                          </button>
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="pl-4 overflow-y-auto max-h-[300px] flex flex-col">
                        {/* Scrollable List */}
                        <div className="flex-grow">
                          <div className="pb-2">
                            <div className="flex items-center gap-3 w-[98%] py-3 bg-gray-300 rounded-lg pl-3 transition-all duration-200 dark:bg-gray-700">
                              <FiUser />
                              <p> Sign in</p>
                            </div>
                          </div>
                          {ShowAll &&
                            [...Array(10)].map((_, index) => (
                              <div key={index} className="pb-2">
                                <div className="flex items-center gap-3 w-[98%] py-3 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg pl-3 transition-all duration-200">
                                  <FiUser />
                                  <p> Sign in</p>
                                </div>
                              </div>
                            ))}
                        </div>

                        {/* History Label */}
                        <div className="mt-3">
                          <p className="text-gray_color font-josefin">
                            History
                          </p>
                        </div>

                        {/* Sign in to see History Button */}
                        <div
                          onClick={handleSignIn}
                          className="flex justify-center mt-10"
                        >
                          <button className="p-2 text-sm border text-gray_color rounded-2xl hover:bg-gray-200 font-josefin dark:hover:bg-gray-700">
                            Sign in to see your History
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

        

            {/* Settings Icon */}
            <div ref={SettingRrf}>
              <span>
                <button
                  onClick={handleSetting}
                  className="relative flex items-center justify-center w-10 h-10 text-[22px] rounded-full hover:border hover:border-gray_color hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <CiSettings />
                </button>
              </span>
              {setting && (
                <div>
                  <div className="absolute w-[165px] h-[100px] shadow-sm bg-slate-50 top-[62px] right-4 sm:right-[300px] border rounded-xl z-40 dark:bg-gray-800">
                    <div className="flex items-center justify-between gap-4 px-1 pt-2">
                      <button
                        onClick={EnableLightMode}
                        className="flex items-center px-3 py-4 transition-all rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <MdOutlineWbSunny />
                      </button>
                      <button
                        onClick={EnableDarkMode}
                        className="flex items-center px-3 py-4 transition-all rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <LuMoonStar />
                      </button>
                      <button className="flex items-center px-3 py-4 transition-all rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-[21px]">
                        <PiDevicesLight />
                      </button>
                    </div>
                    <div className="w-full px-1 ">
                      <button className="w-full py-2 pb-1 pl-2 transition-all rounded-lg text-start hover:bg-gray-200 dark:hover:bg-gray-700 font-josefin">
                        language
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sign Up Button - Text hidden on mobile */}
            <button
              onClick={handleSignup}
              className="flex items-center gap-2 px-2 py-1 text-sm font-medium transition-all duration-500 border-2 sm:px-4 rounded-3xl hover:bg-black_color hover:text-white_color text-black_color dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
            >
              <FiUser />
              <span className="hidden sm:inline font-josefin">Sign up</span>
            </button>

            {/* Sign In Button - Hidden on mobile */}
            <button
              onClick={handleSignIn}
              className="hidden px-4 py-1 text-sm font-medium transition-all duration-500 border-2 rounded-3xl hover:bg-black_color hover:text-white_color text-black_color font-josefin sm:block dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
