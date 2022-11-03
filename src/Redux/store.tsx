import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentSliceReducer from "./commentSlice"

const rootReducer = combineReducers({
  commentSlice: commentSliceReducer
});

export const store = configureStore({
  reducer: rootReducer
});
