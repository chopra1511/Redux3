import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './showCart'
import cartWork from './addCart'

const store = configureStore({
    reducer: {cart: cartReducer, work: cartWork}
});

export default store;