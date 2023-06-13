import React, { useState } from "react";
// import bg from "../assets/Lofico - Craft your focus environment.mp4";
import bg2 from "../assets/Lofico - Craft your focus.mp4";
import bg3 from "../assets/night.mp4";
import pexel from "../assets/pexels-pachon-in-motion-15200537-1920x1080-30fps.mp4";
import { UseBackground } from "../redux/Slice/BgSlice";

const Background = () => {
  const [background, setBackground] = useState("");
  const { night, allBg, currBg, set } = UseBackground();
  console.log(set.night);

  return (
    <div className='relative -z-10'>
      <div
        className={` absolute top-0 left-0 right-0 duration-[1.2s] transition-all ease-in-out  ${
          set.night ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          className='w-screen h-screen object-cover '
        >
          <source src={bg2} />
        </video>
      </div>

      <div
      className={` absolute top-0 left-0 right-0 duration-[1.2s] transition-all  ease-in-out  ${
          set.night ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          className='w-screen h-screen object-cover'
        >
          <source src={bg3} />
        </video>
      </div>
    </div>
  );
};

export default Background;
