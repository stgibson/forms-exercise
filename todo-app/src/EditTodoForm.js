import React, { useState } from "react";
import "./EditTodoForm.css";

const EditTodoForm = ({ todo, editTodo }) => {
  const initFormData = { task: todo.task };
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(todo.id, formData.task);
  };

  return (
    <form className="EditTodoForm" onSubmit={ handleSubmit }>
      <label htmlFor="edit-task">Edit Task:</label>
      <input
        id="edit-task"
        className="EditTodoForm-input"
        name="edit-task"
        type="text"
        onChange={ handleChange }
        value={ formData.task }
      />
      <button type="submit">Edit Todo</button>
    </form>
  );
};

export default EditTodoForm;