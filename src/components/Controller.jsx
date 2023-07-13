import React from "react";
import styled from 'styled-components'
const Controller = ({
  playAudio,
  checkActiveAudio,
  activeMusic,
  playMusic,
  soundValue,
  changeValue
}) => {
  return (
    <div className="fixed ">
      <div className="w-screen h-screen relative ">
        <div className="group relative inline-block left-2/4 -translate-x-2/4 ">
          <Wrapper onClick={playAudio}>
          </Wrapper>
          <h1 className="translate-y-16 -translate-x-16  items-center  flex-col 0 w-[200px]  group-hover:opacity-100 opacity-0 duration-300  bg-black/[.3] backdrop-blur-sm flex justify-center py-4 text-white rounded-sm ">
            People talk
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              onChange={changeValue}
              className={`w-[85%] mx-auto accent-[#ff8b2c]  ${checkActiveAudio ? "block" : " hidden"
                } `}
            />
          </h1>
        </div>
        {/* second */}
        <div
          className="w-[50px] h-[50px] group duration-300 rounded-full border-white border-2 absolute left-[300px] top-[200px] group cursor-pointer active:bg-[#ff7920]"
          onClick={playMusic}
        >
          <h1 className="translate-y-16 -translate-x-16  items-center  flex-col 0 w-[200px]  group-hover:opacity-100 opacity-0 duration-300  bg-black/[.3] backdrop-blur-sm flex justify-center py-4 text-white rounded-sm ">
            rain
            <input
              type="range"
              className={`w-[85%] mx-auto accent-[#ff8b2c]  ${activeMusic ? "block" : " hidden"
                } `}
            />
          </h1>
        </div>
        {/* second */}
      </div>
    </div>
  );
};

export default Controller;


const Wrapper = styled.div`
  width:50px;
  height:50px;
  transition-duration: 300ms;
  border-radius: 100%;
  border: 2px solid white;
  position: absolute;
  /* left: 50%; */
  /* top: -150px; */
  cursor: pointer;

`
