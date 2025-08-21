import { createSlice } from "@reduxjs/toolkit";

const  savedTheme = sessionStorage.getItem("access");


const themeSlice = createSlice({
    name:"theme",
    initialState :{
        mode : 'light'
    },
    reducers:{
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.mode); // persist
          },
          setTheme: (state, action) => {
            state.mode = action.payload; // directly set
            localStorage.setItem("theme", state.mode);
          },
    }
})

export const  {toogleTheme , setTheme}  = themeSlice.actions;
export default themeSlice.reducer