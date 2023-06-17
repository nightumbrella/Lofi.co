import React, { useEffect, useRef, useState } from "react";
import bg2 from "../assets/Lofico - Craft your focus.mp4";
import bg3 from "../assets/night.mp4";
import pexel from "../assets/pexels-pachon-in-motion-15200537-1920x1080-30fps.mp4";
import { UseBackground } from "../redux/Slice/BgSlice";

const Background = () => {
  const [background, setBackground] = useState("");
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const { allBg, currBg, set } = UseBackground();
  const videoRef = useRef();
  const { night, light } = allBg;
  console.log(night, light);
  const [bg, setBg] = useState(light);

  useEffect(() => {
    setIsLoadingTransition(true);
    console.log("true 0000");
    console.log(bg, 'change bg asset')

    setTimeout(() => {
      setIsLoadingTransition(false);
      console.log("false 3000");
    }, 3000);
  }, [light]);

  return (
    <div className='relative -z-10'>
      <div
        className={` absolute top-0 left-0 right-0 duration-[1.2s] transition-all ease-in-out  ${
          set.night ? "opacity-100" : "opacity-0"
        } ${isLoadingTransition ? "opacity-0" : "opacity-100"} `}
      >
        <video
          autoPlay
          muted
          loop
          className='w-screen h-screen object-cover '
          src={bg}
          ref={videoRef}
        >
          {/* <source src={allBg.light} /> */}
        </video>
      </div>
      {/* 
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
          src={allBg.night}
          ref={videoRef}
        >
        </video>
      </div> */}
    </div>
  );
};

export default Background;
