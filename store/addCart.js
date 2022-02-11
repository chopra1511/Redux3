import { createSlice } from "@reduxjs/toolkit";

const cartWork = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false, },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addCart(state, action) {
      const nItem = action.payload;
      const oItem = state.items.find((item) => item.id === nItem.id);
      state.totalQuantity++;
      if (oItem) {
        oItem.quantity++;
        state.changed = true;
        oItem.total = oItem.total + nItem.price;
      } else {
        state.items.push({
          id: nItem.id,
          name: nItem.title,
          price: nItem.price,
          quantity: 1,
          total: nItem.price,
        });
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const oItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (oItem.quantity === 1) {
        state.items = state.items.find((item) => item.id !== id);
      } else {
        oItem.quantity--;
      }
    },
  },
});

export const work = cartWork.actions;
export default cartWork.reducer;