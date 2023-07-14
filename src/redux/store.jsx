import { configureStore } from "@reduxjs/toolkit";
import BackgroundProvider from './Slice/BgSlice'
import AudioSLice from "./Slice/AudioSlice";
export const store = configureStore({
    reducer:{
        background:BackgroundProvider,
        audioSlice:AudioSLice
    }
})

