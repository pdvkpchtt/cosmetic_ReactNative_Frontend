import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "./favoriteSlice";

import { profileSlice } from "./profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
