import React, { useState } from "react";
import Logo from "../../images/grok-logo.png";
import { LuTextSearch } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { PiDevicesLight } from "react-icons/pi";

const Nav = () => {
  const [setting, setSetting] = useState(false);
  const handleSetting = () => {
    setSetting(!setting);
  };
  return (
    <div>
      <div className="container pt-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-10 h-10">
            <img
              src={Logo}
              alt="logo"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Search Icon */}
            <button className="w-10 h-10 flex items-center justify-center text-[22px] hover:border rounded-full hover:border-gray_color hover:bg-gray-200">
              <LuTextSearch />
            </button>

            {/* Settings Icon */}
            <div>
              <span>
                <button
                  onClick={handleSetting}
                  className=" relative w-10 h-10 flex items-center justify-center text-[22px] hover:border rounded-full hover:border-gray_color hover:bg-gray-200"
                >
                  <CiSettings />
                </button>
              </span>
              {setting && (
                <div>
                  <div className="absolute w-[165px] h-[100px] shadow-sm bg-white_color top-[62px] right-[300px] border rounded-xl">
                    <div className="flex items-center justify-between gap-4 px-1 pt-2">
                      <button className="flex items-center px-3 py-4 transition-all rounded-lg hover:bg-gray-200" >
                        <MdOutlineWbSunny />
                      </button>
                      <button className="flex items-center px-3 py-4 transition-all rounded-lg hover:bg-gray-200">
                        <LuMoonStar />
                      </button>
                      <button className="flex items-center px-3 py-4 transition-all rounded-lg hover:bg-gray-200">
                        <PiDevicesLight />
                      </button>
                    </div>
                    <div className="w-full px-1 ">
                      <button className="w-full py-2 pl-2 transition-all rounded-lg text-start hover:bg-gray-200">language </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sign Up Button */}
            <button className="flex items-center gap-2 px-4 py-1 text-sm font-medium transition-all duration-500 border-2 rounded-3xl hover:bg-black_color hover:text-white_color text-black_color ">
              <FiUser />
              <span>Sign up</span>
            </button>

            {/* Sign In Button */}
            <button className="px-4 py-1 text-sm font-medium transition-all duration-500 border-2 rounded-3xl hover:bg-black_color hover:text-white_color text-black_color">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
