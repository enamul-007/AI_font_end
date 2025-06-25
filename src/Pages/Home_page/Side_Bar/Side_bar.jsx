import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { RiChatAiLine } from "react-icons/ri";
import { PiCubeThin } from "react-icons/pi";
import History_hover from "../../../assets/Component/History_hover/History_hover";
import { FaRegUserCircle, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Side_bar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // ✅ Only one useNavigate() & handler
  const signin = useNavigate();
  const handleUser = () => {
    signin("/Sign_in");
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* ========== Desktop Sidebar ========== */}
      <div className="container xs:hidden xl:block">
        <div className="relative flex">
          <div className="w-[250px] border rounded-xl shadow-lg absolute xl:h-[650px] top-3 dark:border-gray-500 left-[-60px]">
            {/* Search */}
            <div className="relative flex items-center pt-2 pl-1">
              <input
                className="border xl:w-[97%] rounded-3xl pl-2 xl:py-[6px] pr-10 dark:bg-black dark:border-gray-500 xs:w-[10%] xs:py-0"
                type="text"
              />
              <FiSearch className="text-[22px] absolute xl:right-6 cursor-pointer" />
            </div>

            {/* Chat */}
            <div className="pt-2 pl-1">
              <div className="w-[97%] rounded-3xl flex items-center gap-5 py-2 pr-10 hover:bg-gray-300 dark:hover:bg-gray-500">
                <div className="pl-2">
                  <RiChatAiLine className="text-[22px] cursor-pointer" />
                </div>
                <p className="font-medium font-josefin xs:hidden xl:block">
                  Chat
                </p>
              </div>
            </div>

            {/* Workspaces */}
            <div className="pt-2 pl-1">
              <div className="w-[97%] rounded-3xl flex items-center gap-4 py-2 pr-10 hover:bg-gray-300 dark:hover:bg-gray-500">
                <div className="pl-2">
                  <PiCubeThin className="text-[22px] cursor-pointer" />
                </div>
                <p className="font-medium font-josefin">Workspaces</p>
              </div>
            </div>

            {/* History */}
            <div className="pt-2">
              <div className="w-[97%] flex items-center gap-4">
                <div className="pl-1">
                  <History_hover className="text-[22px]" />
                </div>
              </div>
            </div>

            {/* User Icon */}
            <div className="absolute pl-4 bottom-3">
              <FaRegUserCircle
                onClick={handleUser}
                className="text-[30px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== Mobile Sidebar ========== */}
      <div className="fixed left-0 z-10 xs:h-[670px] sm:h-[700px] md:h-[800px] top-[80px] xl:hidden lg:block lg:h-[550px] md:block ">
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={` fixed z-10 top- p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg ${
            isExpanded ? "left-[220px]" : "left-4"
          } transition-all duration-300`}
        >
          {isExpanded ? <FaTimes /> : <FiMenu />}
        </button>

        {/* Sidebar Content */}
        <div
          className={`h-full bg-white dark:bg-gray-800 border-r dark:border-gray-500 shadow-lg transition-all duration-300 rounded-2xl ${
            isExpanded ? "w-[250px]" : "w-[50px]"
          }`}
        >
          <div className="flex flex-col h-full pt-10 i">
            {/* Search */}
            <div className="relative flex items-center p-3">
              {isExpanded ? (
                <>
                  <input
                    className="w-full py-1 pl-3 pr-8 border rounded-3xl dark:bg-gray-700 dark:border-gray-500"
                    type="text"
                    placeholder="Search"
                  />
                  <FiSearch className="absolute text-lg cursor-pointer xs:right-6" />
                </>
              ) : (
                <FiSearch className="mx-auto text-xl cursor-pointer left-2" />
              )}
            </div>

            {/* Menu Items */}
            <div className="items-center flex-1 overflow-hidden">
              <div className="flex items-center p-3 mx-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                <RiChatAiLine className="text-xl min-w-[24px]" />
                {isExpanded && (
                  <p className="ml-3 font-medium font-josefin">Chat</p>
                )}
              </div>

              <div className="flex items-center p-3 mx-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                <PiCubeThin className="text-xl min-w-[24px]" />
                {isExpanded && (
                  <p className="ml-3 font-medium font-josefin">Workspaces</p>
                )}
              </div>

              <div className="flex items-center p-3 mx-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                <History_hover className="text-xl min-w-[24px]" />
                {isExpanded && (
                  <p className="ml-3 font-medium font-josefin"></p>
                )}
              </div>
            </div>

            {/* Profile Icon */}
            <div className="p-4">
              <FaRegUserCircle
                onClick={handleUser}
                className="mx-auto text-2xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side_bar;
