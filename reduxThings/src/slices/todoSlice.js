import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { value: [] },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ id: action.payload.id, title: action.payload.title });
    },
    removeTodo: (state, action) => {
      return state.value.filter((todo) => todo?.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.value = state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
    },
  },
});

console.log("todoAction", todoSlice.actions);
console.log("todoReducer", todoSlice.reducer);
console.log("todoInitalState", todoSlice.getInitialState());

export default todoSlice;
