/***
 * Now access the store using useSelector hook.
 * * useSelector : using this hook we can start selecting property from state.
 * whenever component is rendered then the call back function passed in useSelector
 * hook is automatically executed, and inside the callback it automatically passed
 * the state object (which is present inside the store) as agrument in callback
 * function of useSelector hook.
 *
 * using 'useSelector' hook, we are able to select property from state.
 * it takes callback as an arguments, whenever component is rendered
 * at that time itself execute the callback function.
 *
 * * Inside the callback function, it automatically passed
 * state object that we have created. Inital state is present inside the store.
 * here automatically get the state from there and from state get the todos.
 * and it will store inside the 'todoList'.
 */
import { useSelector } from "react-redux";
import Todo from "../todo/todo";
import TodoInput from "../TodoInput/TodoInput";

function TodoList() {
  const todoList = useSelector((state) => state.todos.value);

  return (
    <>
      <TodoInput />
      {todoList &&
        todoList.map((todo) => (
          <Todo id={todo?.id} title={todo?.title} key={todo.id} />
        ))}
    </>
  );
}

export default TodoList;
