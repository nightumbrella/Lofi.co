import { configureStore } from "@reduxjs/toolkit";
import BackgroundProvider from './Slice/BgSlice'
export const store = configureStore({
    reducer:{
        background:BackgroundProvider
    }
})