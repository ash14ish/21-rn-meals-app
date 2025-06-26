import { configureStore } from "@reduxjs/toolkit";
import favouriteMeals from "./favourite-items";

const store = configureStore({
  reducer: {
    favouriteMeals,
  },
});

export default store;
