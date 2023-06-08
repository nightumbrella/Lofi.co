import React from "react";
import bg from "../assets/Lofico - Craft your focus environment.mp4";

const Background = () => {
  return (
    <div className='absolute -z-10'>
      <video
        autoPlay
        muted
        loop
        className='w-screen h-screen object-cover'
      >
        <source src={bg} />
      </video>
    </div>
  );
};

export default Background;
