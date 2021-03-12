import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(null);

  const addTodo = task => setTodos(() => [...todos, { id: uuid(), task }]);

  const showEditForm = event => {
    const { id } = event.target.parentElement;
    setTodo(() => todos.find(todo => todo.id === id));
  };

  const editTodo = (id, task) => {
    setTodos(() => todos.map(todo => {
      if (todo.id === id) {
        todo.task = task;
        return todo;
      }
      else {
        return todo;
      }
    }));
    setTodo(null);
  };

  const removeTodo = event => {
    const { id } = event.target.parentElement;
    setTodos(() => todos.filter(todo => todo.id !== id));
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
            showEditForm={ event => showEditForm(event) }
            removeTodo={ event => removeTodo(event) }
          />
        ))
      }
      {
        todo && <EditTodoForm todo={ todo } editTodo={ editTodo } />
      }
    </div>
  );
};

export default TodoList;