import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants/index";
export const addToDo = (todo) => ({ type: ADD_TODO, payload: todo });
export const removeToDo = (todoId) => ({ type: REMOVE_TODO, payload: todoId });
export const editToDo = (todo) => ({ type: EDIT_TODO, payload: todo });
