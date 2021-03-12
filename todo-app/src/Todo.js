import React from "react";
import "./Todo.css";

const Todo = ({ id, task, showEditForm, removeTodo }) => {
  return (
    <div id={ id } className="Todo">
      { task }
      <button className="Todo-button" onClick={ showEditForm }>edit</button>
      <button className="Todo-button" onClick={ removeTodo }>X</button>
    </div>
  );
};

export default Todo;