import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
  checkbox: false,
  image: null,
  authorized: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfileInfo: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        password2: action.payload.password2,
        checkbox: action.payload.checkbox,
        image: action.payload.image,
      };
    },
    logIn: (state, action) => {
      return {
        ...state,
        authorized: true,
      };
    },
    logOut: (state, action) => {
      return {
        ...state,
        authorized: false,
      };
    },
  },
});
