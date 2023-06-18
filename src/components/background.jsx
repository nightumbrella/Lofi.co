import React, { useEffect, useRef, useState } from "react";
import bg2 from "../assets/Lofico - Craft your focus.mp4";
import bg3 from "../assets/night.mp4";
import pexel from "../assets/pexels-pachon-in-motion-15200537-1920x1080-30fps.mp4";
import { UseBackground } from "../redux/Slice/BgSlice";

const Background = () => {
  const [background, setBackground] = useState("");
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const { allBg, currBg, set, loading } = UseBackground();


  return (
    <div className='relative -z-10'>
      <div
        className={`${
          loading ? "opacity-0 duration-75" : "opacity-100 duration-500"
        }`}
      >
        <div
          className={`  absolute top-0 left-0 right-0    transition-all ease-in-out  `}
        >
          <video
            autoPlay
            muted
            loop
            className='w-screen h-screen object-cover '
            src={allBg.night}
          ></video>
        </div>
      </div>
      {/* 
      <div
        className={`  ${
          loading ? "opacity-0 duration-75" : "opacity-100 duration-[1.2s]"
        }    absolute top-0 left-0 right-0  transition-all  ease-in-out ${
          set.night ? "opacity-0 duration-[1.2s]" : "opacity-100 duration-[1.2s]"
        }  `}
      >
        <video
          autoPlay
          muted
          loop
          className='w-screen h-screen object-cover'
          src={allBg.light}
        ></video>
      </div> */}
    </div>
  );
};

export default Background;
