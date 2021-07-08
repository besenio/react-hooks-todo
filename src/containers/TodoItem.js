import React, { useCallback, useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";

import useDoubleClick from "../hooks/useDoubleClick";
import useOnEnter from "../hooks/useOnEnter";
import useTodos from "../reducers/useTodos";

export default function TodoItem({ todo }) {
  const [, { deleteTodo, setLabel, toggleDone }] = useTodos(() => null);

  const [editing, setEditing] = useState(false);

  const onDelete = useCallback(() => deleteTodo(todo.id), [todo.id]);
  const onDone = useCallback(() => toggleDone(todo.id), [todo.id]);
  const onChange = useCallback(event => setLabel(todo.id, event.target.value), [
    todo.id
  ]);

  const handleViewClick = useDoubleClick(null, () => setEditing(true));
  const finishedCallback = useCallback(
    () => {
      setEditing(false);
      setLabel(todo.id, todo.label.trim());
    },
    [todo]
  );

  const onEnter = useOnEnter(finishedCallback, [todo]);
  const ref = useRef();
  useOnClickOutside(ref, finishedCallback);
  
  const [tempAssignee, setTempAssignee] = useState('');
  const [realAssignee, setRealAssignee] = useState('');
  const [show, setShow] = useState(false);

  const assignTodo = (assignee) => {
    todo = { ...todo, assignee };
    setShow(true);
    setRealAssignee(tempAssignee);
    setTempAssignee('');

    if (tempAssignee === '') setShow(false);
  }

  const [isHovering, setIsHovering] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleViewClick}
      className={`${editing ? "editing" : ""} ${todo.done ? "completed" : ""}`}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.done}
          onChange={onDone}
          autoFocus={true}
        />
        <label>{todo.label} {show && "(" + realAssignee + ")"}</label>
        
        <input
          className={`assignee-input ${ isHovering ? "" : "hidden"}`}
          placeholder="Enter Assignee"
          onChange={event => setTempAssignee(event.target.value)}
          value={tempAssignee}
        />

        <button className={`assign-button ${ isHovering ? "" : "hidden"}`} onClick={() => assignTodo(tempAssignee)}>Assign Todo</button>
        <button className="destroy" onClick={onDelete} />
      </div>
      {editing && (
        <input
          ref={ref}
          className="edit"
          value={todo.label}
          onChange={onChange}
          onKeyPress={onEnter}
        />
      )}
    </li>
  );
}
