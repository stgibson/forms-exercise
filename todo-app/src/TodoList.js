import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task => setTodos(() => [ ...todos, { id: uuid(), task }]);

  const removeTodo = event => {
    const { id } = event.target.parentElement;
    setTodos(() => todos.filter(todo => todo.id !== id))
  };

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={ addTodo } />
      {
        todos.map(todo => (
          <Todo
            id={ todo.id }
            key={ todo.id }
            task={ todo.task }
            removeTodo={ event => removeTodo(event) }
          />
        ))
      }
    </div>
  );
};

export default TodoList;