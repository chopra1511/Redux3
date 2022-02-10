import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './showCart'

const store = configureStore({
    reducer: cartReducer,
});

export default store;