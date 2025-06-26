import { createSlice } from "@reduxjs/toolkit";

const favouriteItemsSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addToFavourites(state, action) {
      state.ids.push(action.payload.id);
    },
    removeFromFavourites(state, action) {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

const favouriteMeals = favouriteItemsSlice.reducer;

export default favouriteMeals;

export const { addToFavourites, removeFromFavourites } =
  favouriteItemsSlice.actions;
