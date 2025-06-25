import React, { useState } from "react";
import { TbAlignJustified } from "react-icons/tb";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";

const History_hover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const getIcon = () => {
    if (isClicked) return <LiaAngleUpSolid className="text-[18px]" />;
    if (isHovered) return <LiaAngleDownSolid className="text-[18px]" />;
    return <TbAlignJustified className="text-[22px]" />;
  };

  return (
    <div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        className="flex items-center gap-4 transition xl:py-2  xl:rounded-3xl w-[230px]  xl:hover:bg-gray-300  xl:dark:hover:bg-gray-500 xl:pl-[10px]"
      >
        {getIcon()}
        <p className="font-medium font-josefin xs:pl-5 xl:pl-0">History</p>
      </button>
    </div>
  );
};

export default History_hover;
