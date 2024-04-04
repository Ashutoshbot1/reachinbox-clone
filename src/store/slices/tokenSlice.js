import { createSlice } from "@reduxjs/toolkit";

const tokenSlice=createSlice({
    name:'token',
    initialState:"",
    reducers:{
        addToken:(state,action)=>{
            return action.payload;
        },
        removeToken:(state)=>{
            return "";
        },
    }
});

export default tokenSlice.reducer;
export const {addToken,removeToken}=tokenSlice.actions;