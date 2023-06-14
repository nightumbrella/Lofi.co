import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosColorFilter } from "react-icons/io";
import { LuImage } from "react-icons/lu";
import { TbLayoutGridAdd } from "react-icons/tb";
import Scene from "./Scene";
const LeftSidebar = () => {
  const [openScene, setOpenScene] = useState(false);
  return (
    <div className='absolute right-12 top-2/4 -translate-y-2/4 bg-black/[.8] backdrop-blur-md text-white px-3 py-8 flex gap-10 flex-col rounded-md'>
      <div>
        <GiSettingsKnobs className='text-xl cursor-pointer' />
      </div>
      <div>
        <IoIosColorFilter className='text-xl cursor-pointer' />
      </div>
      <div className="relative">
        <LuImage className='text-xl cursor-pointer'  onClick={() => setOpenScene(!openScene)}/>
        {openScene && <Scene />}
      </div>
      <div>
        <TbLayoutGridAdd className='text-xl cursor-pointer' />
      </div>
    </div>
  );
};

export default LeftSidebar;
