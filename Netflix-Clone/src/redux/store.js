import { configureStore, createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "mylist",
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter(m => m.id !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = listSlice.actions;

export const store = configureStore({
  reducer: {
    mylist: listSlice.reducer
  }
});
