import React, { useEffect, useState } from "react";
import { SETS } from "../constants/set";
import {
  UseBackground,
  handleBackground,
  stopLoading,
} from "../redux/Slice/BgSlice";
import { useDispatch } from "react-redux";
import video from "../assets/videos/chill-1-day.mp4";
import video2 from "../assets/videos/chill-1-night.mp4";

const Scene = () => {
  const [menu, setMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(null);
  const [sets, setSets] = useState(SETS);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const sendVideoHandler = (set) => {
    console.log(set)
    setLoading(true);
    dispatch(
      handleBackground({
        loading: true,
        night: video,
        light: video2,
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        stopLoading({
          loading: false,
        })
      );
    }, 100);
  }, [sendVideoHandler]);

  function calcHeight(e) {
    const height = e.offsetHeight;
    setMenuHeight(height);
  }
  function handleDetails(set) {
    setSets(set);
    console.log(set);
    setMenu(true);
  }
  function backMenu() {
    setMenu(false);
    setSets(SETS);
  }

  return (
    <div className='absolute bg-set p-[1rem]  max-h-[600px] border   bg-[#333]  rounded-md -top-80  right-20 w-[300px] overflow-x-hidden duration-500'>
      <div className='mb-3'>
        {menu ? (
          <div className='flex items-center justify-between'>
            <div
              className='cursor-pointer'
              onClick={() => backMenu()}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>
            </div>
            <h1>Switch</h1>
          </div>
        ) : (
          <h1>Scene</h1>
        )}
      </div>

      <div>
        {sets.map((set, idx) => (
          <div
            className='mb-3 cursor-pointer hover:opacity-60 duration-300 border rounded-md'
            key={idx}
            onClick={menu ? () => sendVideoHandler(set) : () => handleDetails(set.scenes)}
          >
            <img
              src={set.img}
              alt='image'
            />
          </div>
        ))}
      </div>
      <button onClick={sendVideoHandler}>click</button>
    </div>
  );
};

export default Scene;
