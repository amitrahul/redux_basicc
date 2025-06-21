// import { createStore, combineReducers } from "redux";
// import todoReducer from "./reducers/todoReducer";

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

/**
 * for react-redux part
 */
// const reduxDevToolEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(
//   combineReducers({ todos: todoReducer }),
//   {},
//   reduxDevToolEnhancers
// );

/**
 * for redux toolkit part
 */
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
  devTools: true,
});

console.log("hello", todoSlice);

export default store;
