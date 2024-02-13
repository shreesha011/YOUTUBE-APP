import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT} from "./constants";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action) =>{
            // After 10 messages ,1 message will be deleted
            state.messages.splice(LIVE_CHAT_COUNT,1);
            // Inserts new elements at the start of an array, and returns the new length of the array.
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage}=chatSlice.actions

export default chatSlice.reducer;