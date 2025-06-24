import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiChatAiLine } from "react-icons/ri";
import { PiCubeThin } from "react-icons/pi";
import History_hover from "../../../assets/Component/History_hover/History_hover";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Side_bar = () => {
  const signin = useNavigate ();
  const handleUser = () => {
    signin("/Sign_in");
  };
  return (
    <div>
      <div className="container">
        <div className="relative flex">
          <div className=" w-[250px] border rounded-xl shadow-lg  absolute h-[650px] top-5 ">
            <div className="relative flex items-center pt-2 pl-1">
              <input
                className="border w-[97%] rounded-3xl pl-2 py-[6px] pr-10 "
                type="text"
              />
              <FiSearch className="text-[22px] absolute right-6 cursor-pointer" />
            </div>
            {/* === chat == */}
            <div className="pt-2 pl-1 ">
              <div className="w-[97%] rounded-3xl  flex items-center gap-5 py-2 pr-10 hover:bg-gray-300 ">
                <div className="pl-2">
                  <RiChatAiLine className="text-[22px]   cursor-pointer" />
                </div>
                <p className="font-medium font-josefin">Chat</p>
              </div>
            </div>
            {/* === chat == */}
            {/* === Workspaces == */}
            <div className="pt-2 pl-1 ">
              <div className="w-[97%] rounded-3xl  flex items-center gap-4 py-2 pr-10 hover:bg-gray-300 ">
                <div className="pl-2">
                  <PiCubeThin className="text-[22px]   cursor-pointer" />
                </div>
                <p className="font-medium font-josefin">Workspaces</p>
              </div>
            </div>
            {/* === Workspaces == */}

            {/* === History == */}
            <div className="pt-2 ">
              <div className="w-[97%] flex items-center gap-4 ">
                <div className="pl-1">
                  <History_hover className="text-[22px]   " />
                </div>
              </div>
            </div>
            {/* === History == */}
            <div className="absolute pl-4 bottom-3">
              <FaRegUserCircle
                onClick={handleUser}
                className="text-[30px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side_bar;
