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
        { text: "Hey KIvabe tomake help korte pari bolo! 😎✌️", isSender: false },
      ]);
    }, 1000);
  };

  return (
    <div>
      <div className="container z-0">
        <div className="">
          <div className="  relative flex top-0 left-[350px] h-[650px]  w-[675px]">
            <div className="flex-1 p-4 space-y-1 overflow-y-auto h-[530px]">
              {massage.map((_, index) => (
                <SentMassage
                  key={index}
                  massageSent={_.text}
                  isSender={_.isSender}
                />
              ))}
            </div>
            <div className="absolute bottom-0 w-full">
              <div className=" relative h-[115px] border-bg-gray_color border-[2px] shadow-md rounded-xl ">
                <div className="pt-4 pl-3">
                  <input
                    className="w-[99%] font-josefin text-black_color text-lg"
                    placeholder="What do you want to know?"
                    type="text"
                    value={newMassage}
                    onChange={(a) => setNewMassage(a.target.value)}
                    onKeyDown={(k) => k.key === "Enter" && sentMassage()}
                  />

                  <div className="absolute bottom-[6px]">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="flex p-2 transition-all border border-gray-400 rounded-full hover:bg-gray-300">
                          <label htmlFor="fileUp" className="text-[25px]">
                            <AiOutlinePaperClip />
                          </label>
                          <input className="hidden" id="fileUp" type="file" />
                        </div>
                        <div>
                          <button className="flex items-center gap-2 px-3 py-2 transition-all border border-gray-400 rounded-3xl hover:bg-gray-300">
                            <PiSpiralFill /> Deepsearch
                          </button>
                        </div>
                        <div>
                          <button className="flex items-center gap-2 px-3 py-2 transition-all border border-gray-400 rounded-3xl hover:bg-gray-300">
                            <FcIdea /> Think
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="pl-[320px]">
                          <button
                            onClick={sentMassage}
                            className="flex items-center gap-2 p-3 transition-all border border-gray-400 rounded-full hover:bg-gray-300"
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
