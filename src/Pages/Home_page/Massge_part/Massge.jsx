import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { PiSpiralFill } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import SentMassage from "./SentMassage/SentMassage";

const Massge = () => {
  const [massage, setMassage] = useState([]);
  const [newMassage, setNewMassage] = useState("");
  const sentMassage = () => {
    if (!newMassage.trim()) return;

    // Add user message
    setMassage((message) => [...message, { text: newMassage, isSender: true }]);
    setNewMassage("");

    // After 2 seconds, add bot reply
    setTimeout(() => {
      setMassage((message) => [
        ...message,
        {
          text: "Hey KIvabe tomake help korte pari bolo! 😎✌️",
          isSender: false,
        },
      ]);
    }, 1000);
  };

  return (
    <div>
      <div className="container z-0">
        <div className="">
          <div className="  relative flex top-0 xl:left-[350px] xl:h-[650px] lg:h-[600px]  lg:left-[140px]  xl:w-[675px] xs:h-[700px] xs:left-5 lg:w-[600px] md:h-[850px] md:left-10 md:w-[600px] ">
            <div className="flex-1 p-4 space-y-1 overflow-y-auto h-[540px] ">
              {massage.map((_, index) => (
                <SentMassage
                  key={index}
                  massageSent={_.text}
                  isSender={_.isSender}
                />
              ))}
            </div>
            <div className="absolute bottom-0 xl:w-full xs:left-2">
              <div className=" relative xl:h-[115px] dark:border-gray-500 border-[2px] shadow-md rounded-xl  xs:h-[80px] xs:w-[320px] xl:w-full lg:h-[115px] lg:w-[600px] md:h-[115px] md:w-[600px] ">
                <div className="pl-3 xl:pt-4 xs:pt-2 ">
                  <input
                    className="w-[99%] font-josefin text-black_color text-lg dark:bg-black"
                    placeholder="What do you want to know?"
                    type="text"
                    value={newMassage}
                    onChange={(a) => setNewMassage(a.target.value)}
                    onKeyDown={(k) => k.key === "Enter" && sentMassage()}
                  />

                  <div className="absolute bottom-[6px]">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="flex p-2 transition-all border border-gray-400 rounded-full hover:bg-gray-300 xs:p-1 lg:p-3 md:p-3">
                          <label
                            htmlFor="fileUp"
                            className="xl:text-[25px] xs:text-[15px]"
                          >
                            <AiOutlinePaperClip />
                          </label>
                          <input className="hidden " id="fileUp" type="file" />
                        </div>
                        <div>
                          <button className="flex items-center gap-2 px-3 py-2 transition-all border border-gray-400 rounded-3xl hover:bg-gray-300 xs:py-0 xl:py-2 lg:p-2 md:p-2">
                            <PiSpiralFill /> Deepsearch
                          </button>
                        </div>
                        <div>
                          <button className="flex items-center gap-2 px-3 transition-all border border-gray-400 xl:py-2 rounded-3xl hover:bg-gray-300 xs:py-0 lg:p-2 md:p-2">
                            <FcIdea /> Think
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="xl:pl-[320px] xs:pl-2 md:pl-[270px] lg:pl-[270px] ">
                          <button
                            onClick={sentMassage}
                            className="flex items-center gap-2 transition-all border border-gray-400 rounded-full xl:p-3 hover:bg-gray-300 xs:p-1 lg:p-3 md:p-3"
                          >
                            <FaArrowUp />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Massge;
