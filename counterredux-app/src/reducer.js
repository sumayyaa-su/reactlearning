import { createSlice } from "@reduxjs/toolkit";

//initializing the reducers and state
const counterSlice=createSlice({
    name:'Counter',
    initialState:0,
    reducers:{
        increment:state=>state+1,
        decrement:state=>state-1
    }
})
export default counterSlice.reducer;