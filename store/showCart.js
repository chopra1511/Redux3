import { createSlice } from "@reduxjs/toolkit";

const initialState = {showCart: false};

const cartSlice = createSlice({
    name: "showCart",
    initialState,
    reducers:{
        toggle(state){
            state.showCart = !state.showCart;
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;