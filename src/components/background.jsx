import React, { useState } from "react";
// import bg from "../assets/Lofico - Craft your focus environment.mp4";
import bg2 from "../assets/Lofico - Craft your focus.mp4";
import bg3 from "../assets/night.mp4";
import { UseBackground } from "../redux/Slice/BgSlice";

const Background = () => {
  const [background, setBackground] = useState("");
  const { night, allBg, currBg } = UseBackground();

  return (
    <div className='absolute -z-10'>
      <video
        autoPlay
        muted
        loop
        src={bg3}
        className='w-screen h-screen object-cover transition-opacity duration-200'
      >
      </video>
    </div>
  );
};

export default Background;
