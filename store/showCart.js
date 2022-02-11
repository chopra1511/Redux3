import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false, notification: null };

const cartSlice = createSlice({
    name: "showCart",
    initialState,
    reducers:{
        toggle(state){
            state.showCart = !state.showCart;
        },
        showNotification(state, action) {
            state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message,
      };
    },
    },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;