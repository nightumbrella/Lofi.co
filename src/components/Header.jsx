import React, { useState } from "react";
import Wrapper from "./Wrapper";
// import { HiOutlineForward, HiOutlineBackward } from "react-icons/hi";
import logo from "../assets/logo.0cbf9e63b4a021661126.gif";
import { useDispatch } from "react-redux";
import {
  UseBackground,
  changeBackground,
  onDark,
  onLight,
} from "../redux/Slice/BgSlice";

const el = document.documentElement;

const handleFullScreen = () => {
  el.requestFullscreen();
  el.mozRequestFullScreen();
};

const handleCoreScreen = () => {
  el.exitFullscreen();
  el.mozCancelFullScreen();
};

const Header = () => {
  const [mute, setMute] = useState(true);
  const [minmax, setMinMax] = useState(false);
  const hours = new Date().getHours();
  const minute = new Date().getMinutes();
  const dispatch = useDispatch();
  const { set } = UseBackground();

  return (
    <Wrapper>
      <div className='flex items-center justify-between h-[100px]'>
        <h1>
          <img
            src={logo}
            alt='logo'
            className='w-[150px] select-none'
          />
        </h1>
        <div className='flex gap-10 text-white items-center justify-between '>
          <h1 className='backdrop-blur-sm px-3 h-[30px] flex items-center justify-center  bg-black/[.5] rounded-[5px]'>
            {hours}:{minute < 10 ? `0${minute}` : minute}{" "}
            {hours > 12 ? "PM" : "AM"}
          </h1>
          {/* night or light */}
          {set.night ? (
            <div
              className='cursor-pointer'
              onClick={() => dispatch(onLight())}
            >
              dark
            </div>
          ) : (
            <div
              className='cursor-pointer'
              onClick={() => dispatch(onDark())}
            >
              light
            </div>
          )}

          {/* night or light */}
          <div className='flex items-center backdrop-blur-sm px-3 py-1 bg-black/[.5] rounded-[5px] '>
            <h1>
              Access 50+ scenes <br /> with premium
            </h1>
          </div>
          {/* play   */}
          <div className='flex items-center backdrop-blur-sm px-3 h-[30px]  bg-black/[.5] rounded-[5px] gap-3 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='white'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='white'
                d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='white'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='white'
                d='M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
              />
            </svg>
          </div>
          {/* play   */}

          <div className='flex items-center gap-5 '>
            {/* mute */}
            <div
              className='backdrop-blur-sm w-[30px] justify-center h-[30px] flex items-center  bg-black/[.5] rounded-[5px] cursor-pointer'
              onClick={() => setMute(!mute)}
            >
              {mute ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z'
                  />
                </svg>
              ) : (
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
                    d='M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
                  />
                </svg>
              )}
            </div>
            {/* mute */}

            {/*minimize maximize */}

            <div
              onClick={() => setMinMax(!minmax)}
              className='backdrop-blur-sm relative flex items-center px-1 h-[30px]  bg-black/[.5] rounded-[5px]  cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
                />
              </svg>

              {minmax && (
                <div className='absolute  -bottom-16 z-30 backdrop-blur-sm gap-2 flex items-center px-1 h-[50px] w-[100px] left-2/4 -translate-x-2/4 justify-center bg-black/[.8] rounded-[5px]  cursor-pointer'>
                  <div
                    className='cursor-pointer'
                    onClick={() => handleFullScreen()}
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
                        d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
                      />
                    </svg>
                  </div>

                  <div
                    className='cursor-pointer'
                    onClick={() => handleCoreScreen()}
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
                        d='M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25'
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            {/*minimize maximize */}

            {/* menu icons */}
            <div className='backdrop-blur-sm px-1 flex items-center h-[30px]  bg-black/[.5] rounded-[5px] cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </div>
            {/* menu icons */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
