import React from "react";
import "./Todo.css";

const Todo = ({ id, task, removeTodo }) => {
  return (
    <div id={ id }>
      { task }<button className="Todo-button" onClick={ removeTodo }>X</button>
    </div>
  );
};

export default Todo;