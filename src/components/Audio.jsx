import React, { useRef } from "react";
import audio from "../assets/Morning-Routine-Lofi-Study-Music.mp3";
import peopletalk from '../assets/talking-people-6368.mp3'
import rain from '../assets/soft-rain-ambient-111154.mp3'

const Audio = ({ audioRef, musicRef }) => {

 
  return (
    <div className="absolute top-0 left-0">
      <audio
        src={audio}
        ref={audioRef}
      ></audio>
      <audio
        src={rain}
        ref={musicRef}
      ></audio>
    </div>
  );
};

export default Audio;
