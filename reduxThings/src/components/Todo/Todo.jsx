import { bindActionCreators } from "redux";
import { removeToDo } from "../../actions/index";
import { useDispatch } from "react-redux";

function Todo({ title, id }) {
  const dispatch = useDispatch();

  /**
   * Through 'bindActionCreators' hooks we can bind dispatch with action.
   * Through bindActionCreators hook we can directly not send the dispatch
   * method to it's child, that means we can hide dispatch functionality
   * from child. Directly pass the actions method from 'bindActionCreators' hook.
   */
  const actions = bindActionCreators({ removeToDo }, dispatch);
  return (
    <div>
      {title}
      {/* <button onClick={() => dispatch(removeToDo(id))}>delete</button> */}
      <button onClick={() => actions.removeToDo(id)}>delete</button>
    </div>
  );
}

export default Todo;
