import React, { useRef } from "react";
import audio from "../assets/Morning-Routine-Lofi-Study-Music.mp3";
import peopletalk from '../assets/talking-people-6368.mp3'

const Audio = ({ audioRef,musicRef }) => {
  return (
    <div className="absolute top-0 left-0">
      <audio
        src={peopletalk}
        ref={audioRef}
      ></audio>
      <audio
        src={audio}
        ref={musicRef}
      ></audio>
    </div>
  );
};

export default Audio;
