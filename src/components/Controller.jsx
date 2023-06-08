import React from "react";

const Controller = ({ playAudio, checkActiveAudio ,activeMusic, playMusic}) => {
  return (
    <div className='fixed'>
      <div className='w-screen h-screen relative'>
        <div
          className='w-[50px] h-[50px] group duration-300 rounded-full border-white border-2 absolute left-2/4 top-2/4 group cursor-pointer active:bg-[#ff7920]'
          onClick={playAudio}
        >
          <h1 className='translate-y-16 -translate-x-16  items-center  flex-col 0 w-[200px]  group-hover:opacity-100 opacity-0 duration-300  bg-black/[.3] backdrop-blur-sm flex justify-center py-4 text-white rounded-sm '>
            People talk
            <h1 className=''>
              <input
                type='range'
                className={`w-[85%] mx-auto accent-[#ff8b2c]  ${checkActiveAudio ? "block" : " hidden"} `}
              />
            </h1>
          </h1>
        </div>
        {/* second */}
        <div
          className='w-[50px] h-[50px] group duration-300 rounded-full border-white border-2 absolute left-[300px] top-[200px] group cursor-pointer active:bg-[#ff7920]'
          onClick={playMusic}
        >
          <h1 className='translate-y-16 -translate-x-16  items-center  flex-col 0 w-[200px]  group-hover:opacity-100 opacity-0 duration-300  bg-black/[.3] backdrop-blur-sm flex justify-center py-4 text-white rounded-sm '>
            rain
            <h1 className=''>
              <input
                type='range'
                className={`w-[85%] mx-auto accent-[#ff8b2c]  ${activeMusic ? "block" : " hidden"} `}
              />
            </h1>
          </h1>
        </div>
        {/* second */}

      </div>
    </div>
  );
};

export default Controller;
