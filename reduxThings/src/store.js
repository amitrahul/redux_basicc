import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

// import { configureStore } from "@reduxjs/toolkit";
// import todoSlice from "./slices/todoSlice";

const reduxDevToolEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers({ todos: todoReducer }),
  {},
  reduxDevToolEnhancers
);

// const store = configureStore({
//   reducer: {
//     todos: todoSlice.reducer,
//   },
//   devTools: true,
// });
// console.log("heello");

export default store;
