import React from "react";
import Wrapper from "./Wrapper";
// import { HiOutlineForward, HiOutlineBackward } from "react-icons/hi";
import logo from "../assets/logo.0cbf9e63b4a021661126.gif";

const Header = () => {
  const hours = new Date().getHours();
  const minute = new Date().getMinutes();
  const utc = new Date().getTimezoneOffset();

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
        <div className='flex gap-10 text-white items-center justify-between'>
          <h1>
            {hours}:{minute}
          </h1>
          <div>night</div>
          <div className='flex items-center '>
            🏜️
            <h1>
              Access 50+ scenes <br /> with premium
            </h1>
          </div>
          <div className='flex items-center backdrop-blur-sm px-3 py-1 bg-black/[.5] rounded-[5px] gap-2 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='white'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
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
              className='w-5 h-5'
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
              className='w-5 h-5'
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
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='white'
                d='M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
              />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
