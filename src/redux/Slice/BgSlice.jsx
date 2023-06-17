import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import bg2 from "../../assets/Lofico - Craft your focus.mp4";
import bg3 from "../../assets/night.mp4";
import bg4 from "../../assets/pexels-pachon-in-motion-15200537-1920x1080-30fps.mp4";

const img1 =
  "https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80";

const img2 =
  "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const initialState = {
  bg: "",
  allBg: {
    night: bg2,
    light: bg3,
  },
  set: {
    night: true,
  },
  currBg: bg2,
};

const BackgroundProvider = createSlice({
  name: "background",
  initialState,
  reducers: {
    changeBackground: (state, actions) => {
      if (state.set.night) {
        state.currBg = state.allBg.night;
      } else {
        state.currBg = state.allBg.light;
      }
    },
    onLight: (state, action) => {
      state.set.night = false;
      state.currBg = state.allBg.light;
    },
    onDark: (state, action) => {
      state.set.night = true;
      state.currBg = state.allBg.night;
    },
    handleBackground: (state, action) => {
      console.log(action.payload);
      state.allBg.light = action.payload.light;
      state.allBg.night = action.payload.night;
    },
  },
});

export default BackgroundProvider.reducer;
export const { changeBackground, onLight, onDark, handleBackground } =
  BackgroundProvider.actions;
export const UseBackground = () => useSelector((state) => state.background);
