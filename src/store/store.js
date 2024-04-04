import { configureStore } from "@reduxjs/toolkit";
import token from './slices/tokenSlice.js';

export const store=configureStore({
    reducer:{
        token,
    }
});