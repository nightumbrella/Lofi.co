import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Music_SET } from "../../constants/audio_SET";

const initialState = {
    currentTrackIndex: 0,
    tracks: Music_SET,
    isPlaying: false,
};

const AudioSlice = createSlice({
    name: "AudioSlice",
    initialState,
    reducers: {
        PlayMusic: (state) => {
            state.isPlaying = true;
        },
        PauseMusic: (state) => {
            state.isPlaying = false;
        },
        NextMusic: (state) => {
            if (state.currentTrackIndex === state.tracks.length - 1) {
                state.currentTrackIndex = 0
            }else {
                state.currentTrackIndex++;
            }
        },
        PrevMusic: (state) => {
            if (state.currentTrackIndex === 0) {
                state.currentTrackIndex = state.tracks.length - 1
            } else {
                state.currentTrackIndex--;
            }
        },
    },
});

export default AudioSlice.reducer;
export const { PlayMusic, PauseMusic, NextMusic, PrevMusic } =
    AudioSlice.actions;
export const UseAudio = () => useSelector((state) => state.audioSlice);
