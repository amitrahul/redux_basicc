import { bindActionCreators } from "redux";
import { removeToDo, editToDo } from "../../actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Todo({ title, id }) {
  const dispatch = useDispatch();

  /**
   * Through 'bindActionCreators' hooks we can bind dispatch with action.
   * Through bindActionCreators hook we can directly not send the dispatch
   * method to it's child, that means we can hide dispatch functionality
   * from child. Directly pass the actions method from 'bindActionCreators' hook.
   */
  const actions = bindActionCreators({ removeToDo, editToDo }, dispatch);

  const [isEditting, setIsEditting] = useState(false);
  const [edittedText, setEdittedText] = useState(title);

  function updateToDo() {
    if (isEditting) {
      actions.editToDo({ id: id, title: edittedText });
      setIsEditting(false);
    } else {
      setIsEditting(true);
    }
  }

  return (
    <div>
      {(isEditting && (
        <input
          value={edittedText}
          onChange={(e) => setEdittedText(e.target.value)}
        />
      )) ||
        title}
      {/* <button onClick={() => dispatch(removeToDo(id))}>delete</button> */}
      <button onClick={() => actions.removeToDo(id)}>delete</button>
      <button onClick={updateToDo}>{(isEditting && "Save") || "Edit"}</button>
    </div>
  );
}

export default Todo;
