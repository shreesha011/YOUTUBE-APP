import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state) => {
          state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state) =>{
            // Always close the file (like default) in the watch Page
            state.isMenuOpen=false;
        }
        
    }

})


export const{toggleMenu,closeMenu} =appSlice.actions;

export default appSlice.reducer;