import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    // modify state based on action
    addItem: (state, action) => {
      //DONT MUTATE STATE - in vanilla redux
      //MUTATE STATE - in Redux toolkit
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearcart: (state) => {
      console.log(current(state));
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItems, clearcart } = CartSlice.actions;
export default CartSlice.reducer;
